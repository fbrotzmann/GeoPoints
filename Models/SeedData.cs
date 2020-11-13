using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using GeoPoints.Data;
using GeoPoints.Models;
using System;
using System.Linq;

namespace GeoPoints.Models
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new PointsContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<PointsContext>>()))
            {
                // Look for any Points.
                if (context.Points.Any())
                {
                    return;   // DB has been seeded
                }

                context.Points.AddRange(
                    new Point
                    {
                        Latitud = 19.420620739866035F,
                        Longitud = -99.18766021728516F,
                        Nombre = "Chapultepec",
                        Precio = 1000000,
                        Zona = "Oeste"
                    },

                    new Point
                    {
                        Latitud = 19.429565157540974F,
                        Longitud = -99.19692993164061F,
                        Nombre = "Polanco",
                        Precio = 125000,
                        Zona = "Oeste"
                    },
                    new Point
                    {
                        Latitud = 19.432630834436285F,
                        Longitud = -99.133209F,
                        Nombre = "Zócalo",
                        Precio = 150000,
                        Zona = "Centro"
                    },
                    new Point
                    {
                        Latitud = 19.433356141853885F,
                        Longitud = -99.135447666049F,
                        Nombre = "Calle Francisco Madero",
                        Precio = 175000,
                        Zona = "Centro"
                    },

                    new Point
                    {
                        Latitud = 19.35510610243764F,
                        Longitud = -99.16237771511078F,
                        Nombre = "Museo Frida Kahlo",
                        Precio = 50000,
                        Zona = "Sur"
                    },

                    new Point
                    {
                        Latitud = 19.35376486958421F,
                        Longitud = -99.17208194732666F,
                        Nombre = "Viveros de Coyoacán",
                        Precio = 75000,
                        Zona = "Sur"
                    },

                    new Point
                    {
                        Latitud = 19.428553370288462F,
                        Longitud = -99.0813159942627F,
                        Nombre = "Aeropuerto",
                        Precio = 50000,
                        Zona = "Este"
                    },
                    new Point
                    {
                        Latitud = 19.460118162137725F,
                        Longitud = -99.07290458679199F,
                        Nombre = "Bosques de Aragón",
                        Precio = 75000,
                        Zona = "Este"
                    },
                    new Point
                    {
                        Latitud = 19.490523814662268F,
                        Longitud = -99.1141676902771F,
                        Nombre = "Tepeyac",
                        Precio = 150000,
                        Zona = "Norte"
                    },
                    new Point
                    {
                        Latitud = 19.510164084962916F,
                        Longitud = -99.11579847335815F,
                        Nombre = "Zacatenco",
                        Precio = 150000,
                        Zona = "Norte"
                    }


                );
                context.SaveChanges();
            }
        }
    }
}