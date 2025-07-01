from django.shortcuts import render
from django.views.generic import ListView
from .models import Event
from .serializers import EventSerializer

# Create your views here.
class EventListView(ListView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    
