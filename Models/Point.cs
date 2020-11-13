using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GeoPoints.Models
{
    public class Point
    {
        public int Id { get; set; }
        public float Latitud { get; set; }
        public float Longitud { get; set; }
        public string Nombre { get; set; }
        [DataType(DataType.Currency)]
        public float Precio { get; set; }
        public string Zona { get; set; }
    }
}
