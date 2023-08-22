from django.db import models

# Create your models here.
class Product(models.Model):
    description = models.TextField(verbose_name="Contenido")
    image = models.ImageField(upload_to="products")
    created = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de creacion")
    updated = models.DateTimeField(auto_now=True, verbose_name="Fecha de edicion")
    stock= models.CharField( max_length=50,default='stock', verbose_name="Cantidad")
    class Meta:
        ordering = ['-created']
        verbose_name="producto"
        verbose_name_plural="productos"

    def __str__(self):
        return self.description
