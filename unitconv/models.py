from django.db import models

# Create your models here.
class Unit(models.Model):
    abbreviation = models.CharField(max_length=10)
    amount_per_kg = models.FloatField()