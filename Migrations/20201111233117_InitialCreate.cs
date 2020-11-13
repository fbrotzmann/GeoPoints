using Microsoft.EntityFrameworkCore.Migrations;

namespace GeoPoints.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Points",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Latitud = table.Column<float>(nullable: false),
                    Longitud = table.Column<float>(nullable: false),
                    Nombre = table.Column<string>(nullable: true),
                    Precio = table.Column<float>(nullable: false),
                    Zona = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Points", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Points");
        }
    }
}
