from django.urls import path
from . import views

urlpatterns = [
    path('events/', views.EventsView.as_view(), name='events_list'),
    path('events/<int:id>/', views.EventDetailView.as_view(), name='event_detail'),
]
