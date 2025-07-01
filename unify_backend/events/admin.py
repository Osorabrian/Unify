from django.contrib import admin
from .models import Event

# Register your models here.
@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'host')
    search_fields = ('title', 'location', 'host')
    raw_id_fields = ('host',)
    date_hierarchy = 'start_time'
    prepopulated_fields = {'slug': ('title',)}
    ordering = ('-start_time',)
    list_filter = ('location', 'host', 'event_type')
    show_facets = admin.ShowFacets.ALWAYS
