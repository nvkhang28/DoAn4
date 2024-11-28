

using API.Entities;

namespace API.Data
{
    public static class Dblnitializer
    {
        public static void Initialize(StoreContext context)
        {
            if (context.Products.Any()) return;
            var products = new List<Product>
            {
                new Product
{
    Name = "Urbas Basic White",
    Description = "Giày Urbas Classic với thiết kế đơn giản nhưng hiện đại, phù hợp cho mọi phong cách thời trang.",
    Price = 550000,
    PictureUrl = "https://ananas.vn/wp-content/uploads/Pro_AV00149_1.jpg",
    Brand = "Ananas",
    Type = "Sneakers",
    QuantityInStock = 200
},
new Product
{
    Name = "Urbas Simple Black",
    Description = "Urbas phiên bản màu đen trơn, với chất liệu vải canvas bền bỉ, là lựa chọn hoàn hảo cho mọi hoàn cảnh.",
    Price = 550000,
    PictureUrl = "https://ananas.vn/wp-content/uploads/Pro_AV00150_1.jpg",
    Brand = "Ananas",
    Type = "Sneakers",
    QuantityInStock = 150
},
new Product
{
    Name = "Basas Vulcanized Low Top",
    Description = "Basas Low Top mang phong cách cổ điển kết hợp với đế cao su chắc chắn, tạo nên sự thoải mái tối đa khi di chuyển.",
    Price = 650000,
    PictureUrl = "https://ananas.vn/wp-content/uploads/Pro_AV00151_1.jpg",
    Brand = "Ananas",
    Type = "Sneakers",
    QuantityInStock = 100
},
new Product
{
    Name = "Pattas Low Top OG",
    Description = "Phiên bản Pattas Low Top OG với các chi tiết tối giản, phong cách mang dấu ấn riêng của Ananas.",
    Price = 700000,
    PictureUrl = "https://ananas.vn/wp-content/uploads/Pro_AV00203_2-500x500.jpeg",
    Brand = "Ananas",
    Type = "Sneakers",
    QuantityInStock = 120
},
new Product
{
    Name = "Track 6 Vintage Red",
    Description = "Track 6 với phối màu đỏ cổ điển, là sự kết hợp hoàn hảo giữa phong cách và tính năng vận động.",
    Price = 750000,
    PictureUrl = "https://ananas.vn/wp-content/uploads/Pro_AV00173_2-500x500.jpeg",
    Brand = "Ananas",
    Type = "Sneakers",
    QuantityInStock = 180
},
new Product
{
    Name = "Vintas Classic Gum Beige",
    Description = "Vintas Classic với phần đế Gum đặc trưng, mang lại vẻ ngoài thanh lịch nhưng vẫn giữ được sự năng động.",
    Price = 600000,
    PictureUrl = "https://ananas.vn/wp-content/uploads/Pro_AV00202_2-500x500.jpg",
    Brand = "Ananas",
    Type = "Sneakers",
    QuantityInStock = 160
},
new Product
{
    Name = "Vintas Low Top All Black",
    Description = "Phiên bản Vintas Low Top màu đen toàn phần, phù hợp cho những ai yêu thích sự đơn giản và mạnh mẽ.",
    Price = 600000,
    PictureUrl = "https://ananas.vn/wp-content/uploads/Pro_AV00199_2-500x500.jpg",
    Brand = "Ananas",
    Type = "Sneakers",
    QuantityInStock = 130
},
new Product
{
    Name = "Track 6 Summer Yellow",
    Description = "Giày Track 6 phiên bản màu vàng rực rỡ, mang đến sự tươi mới và nổi bật trong mọi hoạt động.",
    Price = 750000,
    PictureUrl = "https://ananas.vn/wp-content/uploads/Pro_AV00191_2-500x500.jpg",
    Brand = "Ananas",
    Type = "Sneakers",
    QuantityInStock = 90
},
new Product
{
    Name = "Urbas Gum Black White",
    Description = "Urbas phối màu đen trắng với đế Gum nổi bật, là sự lựa chọn tuyệt vời cho những ai yêu thích phong cách thể thao.",
    Price = 550000,
    PictureUrl = "https://ananas.vn/wp-content/uploads/Pro_AV00195_2-500x500.jpg",
    Brand = "Ananas",
    Type = "Sneakers",
    QuantityInStock = 110
},
new Product
{
    Name = "Vintas Classic White Navy",
    Description = "Giày Vintas Classic với phối màu trắng navy, mang lại phong cách thời thượng và tinh tế.",
    Price = 600000,
    PictureUrl = "https://ananas.vn/wp-content/uploads/Pro_AV00190_2-500x500.jpg",
    Brand = "Ananas",
    Type = "Sneakers",
    QuantityInStock = 140
},
new Product
{
    Name = "Urbas Basic White Gum",
    Description = "Giày Urbas Classic với thiết kế đơn giản nhưng hiện đại, phù hợp cho mọi phong cách thời trang.",
    Price = 550000,
    PictureUrl = "https://ananas.vn/wp-content/uploads/Pro_AV00205_2-500x500.jpeg",
    Brand = "Ananas",
    Type = "Sneakers",
    QuantityInStock = 200
},
new Product
{
    Name = "Urbas Bold Black",
    Description = "Urbas phiên bản màu đen trơn, với chất liệu vải canvas bền bỉ, là lựa chọn hoàn hảo cho mọi hoàn cảnh.",
    Price = 550000,
    PictureUrl = "https://ananas.vn/wp-content/uploads/Pro_AV00174_2-500x500.jpeg",
    Brand = "Ananas",
    Type = "Sneakers",
    QuantityInStock = 150
},
new Product
{
    Name = "Basas High Top White",
    Description = "Basas Low Top mang phong cách cổ điển kết hợp với đế cao su chắc chắn, tạo nên sự thoải mái tối đa khi di chuyển.",
    Price = 650000,
    PictureUrl = "https://ananas.vn/wp-content/uploads/Pro_AV00154_2-500x500.jpg",
    Brand = "Ananas",
    Type = "Sneakers",
    QuantityInStock = 100
},
new Product
{
    Name = "Pattas Classic OG White",
    Description = "Phiên bản Pattas Low Top OG với các chi tiết tối giản, phong cách mang dấu ấn riêng của Ananas.",
    Price = 700000,
    PictureUrl = "https://ananas.vn/wp-content/uploads/Pro_AV00153_2-500x500.jpg",
    Brand = "Ananas",
    Type = "Sneakers",
    QuantityInStock = 120
},
new Product
{
    Name = "Track 6 Red Vintage",
    Description = "Track 6 với phối màu đỏ cổ điển, là sự kết hợp hoàn hảo giữa phong cách và tính năng vận động.",
    Price = 750000,
    PictureUrl = "https://ananas.vn/wp-content/uploads/Pro_AV00155_2-500x500.jpg",
    Brand = "Ananas",
    Type = "Sneakers",
    QuantityInStock = 180
},
new Product
{
    Name = "Vintas Gum Beige Low",
    Description = "Vintas Classic với phần đế Gum đặc trưng, mang lại vẻ ngoài thanh lịch nhưng vẫn giữ được sự năng động.",
    Price = 600000,
    PictureUrl = "https://ananas.vn/wp-content/uploads/Pro_AV00123_2-500x500.jpeg",
    Brand = "Ananas",
    Type = "Sneakers",
    QuantityInStock = 160
},
new Product
{
    Name = "Vintas Monochrome Black",
    Description = "Phiên bản Vintas Low Top màu đen toàn phần, phù hợp cho những ai yêu thích sự đơn giản và mạnh mẽ.",
    Price = 600000,
    PictureUrl = "https://ananas.vn/wp-content/uploads/Pro_AV00121_2-500x500.jpeg",
    Brand = "Ananas",
    Type = "Sneakers",
    QuantityInStock = 130
},
new Product
{
    Name = "Track 6 Yellow Summer",
    Description = "Giày Track 6 phiên bản màu vàng rực rỡ, mang đến sự tươi mới và nổi bật trong mọi hoạt động.",
    Price = 750000,
    PictureUrl = "https://ananas.vn/wp-content/uploads/Pro_AV00119_2-500x500.jpeg",
    Brand = "Ananas",
    Type = "Sneakers",
    QuantityInStock = 90
},
new Product
{
    Name = "Urbas Duo Black White",
    Description = "Urbas phối màu đen trắng với đế Gum nổi bật, là sự lựa chọn tuyệt vời cho những ai yêu thích phong cách thể thao.",
    Price = 550000,
    PictureUrl = "https://ananas.vn/wp-content/uploads/pro_AV00118_2-500x500.jpg",
    Brand = "Ananas",
    Type = "Sneakers",
    QuantityInStock = 110
},
new Product
{
    Name = "Vintas Navy White Classic",
    Description = "Giày Vintas Classic với phối màu trắng navy, mang lại phong cách thời thượng và tinh tế.",
    Price = 600000,
    PictureUrl = "https://ananas.vn/wp-content/uploads/pro_AV00117_2-500x500.jpg",
    Brand = "Ananas",
    Type = "Sneakers",
    QuantityInStock = 140
}

            };
            foreach (var product in products)
            {
                context.Products.Add(product);
            }
            context.SaveChanges();
        }
    }
}