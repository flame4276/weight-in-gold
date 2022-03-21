from django.shortcuts import render
from django.http import JsonResponse
from .models import Unit
# from django.db.models import 

# Create your views here.
def convert(request):
    try:
        unit_from = request.GET['from']
        value = request.GET['value']
        unit_to = request.GET['to']

        value = float(value)

        from_per_kg = Unit.objects.get(abbreviation=unit_from).amount_per_kg
        to_per_kg = Unit.objects.get(abbreviation=unit_to).amount_per_kg

        result = value / from_per_kg * to_per_kg

        return JsonResponse({ 'units': unit_to, 'value': result })
    except KeyError:
        return JsonResponse({ 'Error' : 'Every request must contain from, value, and to parameters' })
    except ValueError:
        return JsonResponse({ 'Error' : 'Value must be a floating-point number' })
    except Unit.DoesNotExist:
        return JsonResponse({ 'Error' : 'Invalid units. Please refer to documentation for a list of accepted units' })
