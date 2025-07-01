from django.db import models
from django.conf import settings
from django.utils.text import slugify

# Create your models here.
class Event(models.Model):
    
    class EventType(models.TextChoices):
        CONFERENCE = 'conference', 'Conference'
        SEMINAR = 'seminar', 'Seminar'
        WORKSHOP = 'workshop', 'Workshop'
        FESTIVAL = 'festival', 'Festival'
        NETWORKING = 'networking', 'Networking'
        OTHER = 'other', 'Other'
    
    title = models.CharField(max_length=250)
    slug = models.SlugField(unique=True, max_length=250)
    event_type = models.CharField(max_length=20, choices=EventType.choices, default=EventType.OTHER)
    description = models.TextField()
    host  = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='hosted_events')
    participants = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='event_participants', blank=True)
    max_attendees = models.PositiveIntegerField(null=True, blank=True)
    image = models.ImageField(upload_to='images/events/%Y/%m/%d', null=True, blank=True)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    location = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} hosted by {self.host}"
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
        
    class Meta:
        ordering = ['-start_time']
        indexes = [models.Index(fields=['-start_time']), models.Index(fields=['title'])]
        