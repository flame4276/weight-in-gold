from django.shortcuts import render

# Create your views here.
def plan(request):
    return render(request, 'gold/plan.html')