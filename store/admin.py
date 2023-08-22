from django.contrib import admin
from .models import Product

# Register your models here.
class StoreAdmin(admin.ModelAdmin):
    readonly_fileds=("created","updated")

admin.site.register(Product,StoreAdmin)