from django.urls import path

from . import views

urlpatterns = [
    path('plan', views.plan, name='plan'),
    path('', views.gold, name='gold'),
]