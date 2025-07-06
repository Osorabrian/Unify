from django.shortcuts import render
from .models import Event
from .serializers import EventSerializer
from rest_framework import generics

# Create your views here.
class EventsView(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    
class EventDetailView(generics.RetrieveAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    lookup_field = 'id'
    
