# Generated by Django 4.1.1 on 2022-09-14 18:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="ticket",
            name="URLs",
            field=models.TextField(blank=True, null=True),
        ),
    ]
