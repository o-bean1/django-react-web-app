from django.db import models

# Create your models here.


class Ticket(models.Model):
    date = models.TextField(null=True, blank=True)
    URLs = models.TextField(null=True, blank=True)
    price = models.TextField(null=True, blank=True)

