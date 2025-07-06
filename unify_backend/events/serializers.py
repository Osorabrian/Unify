from rest_framework import serializers
from .models import Event

class EventSerializer(serializers.ModelSerializer):
    host = serializers.CharField(source='host.username')
    participants = serializers.StringRelatedField(many=True, read_only=True)
    # Assuming you have a 'username' field in the User model
    class Meta:
        model = Event
        fields = ['id', 'title', 'description', 'start_time', 'end_time', 'host', 'participants', 'max_attendees', 'image', 'event_type', 'location', 'price']
        
