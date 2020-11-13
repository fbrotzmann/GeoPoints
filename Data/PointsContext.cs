using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GeoPoints.Models;
using Microsoft.EntityFrameworkCore;

namespace GeoPoints.Data
{
    public class PointsContext : DbContext
    {
        public PointsContext(DbContextOptions<PointsContext> options) : base(options) { }

        public DbSet<Point> Points { get; set; }
    }
}