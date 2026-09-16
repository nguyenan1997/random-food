// ---------------------------------------------------------------------------
// Kho dữ liệu món ngon Hà Nội 💕
// Mỗi món gồm: tên, emoji, danh mục, mô tả ngắn, khoảng giá, khu vực nổi tiếng
// và vài địa chỉ/quán gợi ý.
// ---------------------------------------------------------------------------

export const CATEGORIES = [
  { id: 'all', label: 'Tất cả', emoji: '✨' },
  { id: 'mon-nuoc', label: 'Món nước', emoji: '🍜' },
  { id: 'mon-kho', label: 'Món khô & Cơm', emoji: '🍚' },
  { id: 'an-vat', label: 'Ăn vặt', emoji: '🍢' },
  { id: 'nuong-lau', label: 'Nướng & Lẩu', emoji: '🔥' },
  { id: 'trang-mieng', label: 'Tráng miệng', emoji: '🍧' },
  { id: 'do-uong', label: 'Đồ uống', emoji: '🧋' },
  { id: 'banh', label: 'Bánh ngọt', emoji: '🧁' },
]

export const AREAS = [
  'Hoàn Kiếm',
  'Ba Đình',
  'Đống Đa',
  'Hai Bà Trưng',
  'Cầu Giấy',
  'Tây Hồ',
  'Thanh Xuân',
  'Hoàng Mai',
  'Long Biên',
  'Nam Từ Liêm',
  'Bắc Từ Liêm',
  'Hà Đông',
]

export const FOODS = [
  // ======================== MÓN NƯỚC ========================
  { id: 1, name: 'Phở bò', emoji: '🍜', category: 'mon-nuoc', desc: 'Nước dùng xương bò ninh trong veo, thơm mùi hồi quế, bánh phở mềm với tái, nạm, gầu giòn.', price: '40.000 – 80.000đ', areas: ['Hoàn Kiếm', 'Đống Đa', 'Hai Bà Trưng'], spots: ['Phở Thìn Lò Đúc', 'Phở Bát Đàn', 'Phở Sướng'], tags: ['truyền thống', 'ăn sáng'] },
  { id: 2, name: 'Phở gà', emoji: '🍜', category: 'mon-nuoc', desc: 'Gà ta luộc xé, nước dùng ngọt thanh, rắc hành hoa và tiêu, ăn kèm quẩy nóng.', price: '35.000 – 70.000đ', areas: ['Hoàn Kiếm', 'Ba Đình', 'Cầu Giấy'], spots: ['Phở gà Lãn Ông', 'Phở gà Hàng Trống'], tags: ['thanh đạm', 'ăn sáng'] },
  { id: 3, name: 'Bún chả Hà Nội', emoji: '🥢', category: 'mon-nuoc', desc: 'Chả viên và chả miếng nướng than hoa thơm lừng, chan nước mắm chua ngọt, ăn cùng bún rối và rau sống.', price: '40.000 – 90.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Bún chả Hương Liên', 'Bún chả Đắc Kim', 'Bún chả Sinh Từ'], tags: ['đặc sản', 'ăn trưa'] },
  { id: 4, name: 'Bún ốc nguội', emoji: '🐌', category: 'mon-nuoc', desc: 'Ốc nhồi nhồi thịt, nước dùng chua nhẹ từ giấm bỗng, ăn kèm đậu rán vàng và rau thơm.', price: '35.000 – 70.000đ', areas: ['Hoàn Kiếm', 'Ba Đình'], spots: ['Bún ốc Hàng Bạc', 'Ốc Ông Béo'], tags: ['đặc sản', 'ăn vặt'] },
  { id: 5, name: 'Bún ốc chuối đậu', emoji: '🐌', category: 'mon-nuoc', desc: 'Ốc béo bùi, chuối xanh và đậu phụ om mềm trong nước dùng nghệ vàng óng.', price: '45.000 – 90.000đ', areas: ['Tây Hồ', 'Đống Đa'], spots: ['Bún ốc chuối đậu Thụy Khuê'], tags: ['đặc sản', 'đậm đà'] },
  { id: 6, name: 'Bún riêu cua', emoji: '🦀', category: 'mon-nuoc', desc: 'Gạch cua đồng vàng ruộm, cà chua chín mọng, đậu rán và mắm tôm nức mũi.', price: '35.000 – 70.000đ', areas: ['Hoàn Kiếm', 'Hai Bà Trưng', 'Đống Đa'], spots: ['Bún riêu Hàng Lược', 'Bún riêu Bùi Thị Xuân'], tags: ['truyền thống', 'ăn sáng'] },
  { id: 7, name: 'Bún thang', emoji: '🍲', category: 'mon-nuoc', desc: 'Món cầu kỳ bậc nhất Hà Nội: trứng tráng thái sợi, giò lụa, tôm khô, củ cải khô và mắm tôm.', price: '50.000 – 90.000đ', areas: ['Hoàn Kiếm'], spots: ['Bún thang Cầu Gỗ', 'Bún thang Hàng Hành'], tags: ['cầu kỳ', 'đặc sản'] },
  { id: 8, name: 'Bún mọc', emoji: '🍲', category: 'mon-nuoc', desc: 'Nước dùng xương ngọt trong, mọc viên mềm mịn, sườn non và chút hành phi thơm.', price: '35.000 – 65.000đ', areas: ['Ba Đình', 'Đống Đa'], spots: ['Bún mọc Hàng Chai'], tags: ['thanh đạm'] },
  { id: 9, name: 'Bún bò Nam Bộ', emoji: '🥩', category: 'mon-nuoc', desc: 'Bún trộn bò xào mềm, đậu phộng rang giã nhỏ, hành phi và nước trộn chua ngọt đậm vị.', price: '40.000 – 80.000đ', areas: ['Hoàn Kiếm', 'Hoàng Mai'], spots: ['Bún bò Nam Bộ Hàng Điếu'], tags: ['trộn', 'ăn trưa'] },
  { id: 10, name: 'Bún sườn chua', emoji: '🍲', category: 'mon-nuoc', desc: 'Sườn non mềm rục, sấu hoặc me tạo vị chua dịu, ăn kèm măng chua giòn.', price: '35.000 – 65.000đ', areas: ['Đống Đa', 'Cầu Giấy'], spots: ['Bún sườn chua Nguyễn Chí Thanh'], tags: ['chua dịu'] },
  { id: 11, name: 'Miến trộn', emoji: '🥡', category: 'mon-nuoc', desc: 'Miến dong dai nhẹ trộn thịt xá xíu, tôm nõn, đậu phộng và rau thơm.', price: '35.000 – 60.000đ', areas: ['Hoàn Kiếm'], spots: ['Miến trộn Hàng Bồ'], tags: ['trộn'] },
  { id: 12, name: 'Miến gà', emoji: '🍜', category: 'mon-nuoc', desc: 'Miến dong trong, nước dùng gà ta vàng óng, thịt gà xé mềm thơm gừng.', price: '35.000 – 65.000đ', areas: ['Ba Đình', 'Tây Hồ'], spots: ['Miến gà Kim Mã'], tags: ['thanh đạm'] },
  { id: 13, name: 'Mì vằn thắn', emoji: '🥟', category: 'mon-nuoc', desc: 'Sợi mì vàng dai, nước dùng thịt xá xíu, sủi cảo nhân thịt tôm mềm ngọt.', price: '40.000 – 70.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Mì vằn thắn Hàng Bồ', 'Vằn thắn Đinh Liệt'], tags: ['hoa kiều'] },
  { id: 14, name: 'Mì xá xíu', emoji: '🍜', category: 'mon-nuoc', desc: 'Mì trứng tươi, thịt heo quay xá xíu đỏ au, cải ngọt và nước dùng ngọt xương.', price: '35.000 – 65.000đ', areas: ['Hoàn Kiếm'], spots: ['Mì xá xíu Hàng Khoai'], tags: ['hoa kiều'] },
  { id: 15, name: 'Bánh đa cua', emoji: '🦀', category: 'mon-nuoc', desc: 'Bánh đa đỏ dai, gạch cua đồng, chả lá lốt và khoai môn bùi trong nước dùng ngọt.', price: '40.000 – 70.000đ', areas: ['Hai Bà Trưng', 'Hoàng Mai'], spots: ['Bánh đa cua Lò Đúc'], tags: ['hải phòng'] },
  { id: 16, name: 'Canh bún', emoji: '🍲', category: 'mon-nuoc', desc: 'Bún sợi nhỏ nấu canh rau muống, cua đồng và cà chua, mộc mạc mà gây thương nhớ.', price: '30.000 – 55.000đ', areas: ['Đống Đa', 'Hai Bà Trưng'], spots: ['Canh bún Lò Đúc'], tags: ['dân dã'] },
  { id: 17, name: 'Bún cá châu chấu', emoji: '🐟', category: 'mon-nuoc', desc: 'Cá rô phi chiên giòn, nước dùng chua từ me, dọc mùng và bún trắng.', price: '40.000 – 70.000đ', areas: ['Cầu Giấy', 'Thanh Xuân'], spots: ['Bún cá Nguyễn Khánh Toàn'], tags: ['chua cay'] },
  { id: 18, name: 'Phở xào', emoji: '🍳', category: 'mon-nuoc', desc: 'Bánh phở xào lửa lớn cùng giá đỗ, thịt bò và cải ngọt, xém thơm vị chảo gang.', price: '40.000 – 75.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Phở xào Nam Ngư'], tags: ['xào'] },
  { id: 19, name: 'Bánh canh ghẹ', emoji: '🦀', category: 'mon-nuoc', desc: 'Sợi bánh canh mềm, nước dùng ghẹ ngọt lịm, tôm thịt và hành ngò xanh mướt.', price: '45.000 – 85.000đ', areas: ['Cầu Giấy', 'Nam Từ Liêm'], spots: ['Bánh canh ghẹ Trần Duy Hưng'], tags: ['hải sản'] },
  { id: 20, name: 'Hủ tiếu Nam Vang', emoji: '🍜', category: 'mon-nuoc', desc: 'Nước dùng xương heo trong ngọt, tôm tươi, thịt băm, trứng cút và hẹ lá.', price: '45.000 – 75.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Hủ tiếu Nam Vang Hàng Cân'], tags: ['nam bộ'] },
  { id: 21, name: 'Bún nước lèo', emoji: '🍲', category: 'mon-nuoc', desc: 'Nước lèo cá lóc ngọt đậm, ăn kèm bắp chuối, giá và rau đắng miền Tây.', price: '40.000 – 70.000đ', areas: ['Hoàng Mai'], spots: ['Bún nước lèo Trương Định'], tags: ['miền tây'] },
  { id: 22, name: 'Bún đậu mắm tôm', emoji: '🍢', category: 'mon-kho', desc: 'Bún lá, đậu phụ rán vàng giòn, chả cốm, dồi sụn và chén mắm tôm chưng đánh bọt.', price: '45.000 – 90.000đ', areas: ['Hoàn Kiếm', 'Đống Đa', 'Cầu Giấy'], spots: ['Bún đậu Ngõ Tràng An', 'Bún đậu Hàng Khay'], tags: ['đặc sản', 'ăn trưa'] },
  { id: 23, name: 'Bún trộn chả cá', emoji: '🐟', category: 'mon-nuoc', desc: 'Chả cá thơm nghệ vàng, thì là, hành tây xào cùng bún và đậu phộng rang.', price: '45.000 – 80.000đ', areas: ['Hoàn Kiếm'], spots: ['Chả cá Hàng Sơn'], tags: ['xào'] },

  // ======================== MÓN KHÔ & CƠM ========================
  { id: 24, name: 'Cơm tấm sườn', emoji: '🍚', category: 'mon-kho', desc: 'Cơm tấm hạt dẻo thơm, sườn nướng mật ong, bì, chả trứng và mỡ hành bóng nhẫy.', price: '45.000 – 85.000đ', areas: ['Đống Đa', 'Cầu Giấy', 'Hai Bà Trưng'], spots: ['Cơm tấm Ba Ghiền', 'Cơm tấm Cô Chín'], tags: ['nam bộ', 'ăn trưa'] },
  { id: 25, name: 'Cơm rang dưa bò', emoji: '🍳', category: 'mon-kho', desc: 'Cơm rang tơi hạt cùng dưa muối chua giòn và thịt bò xào mềm, ăn kèm canh.', price: '40.000 – 75.000đ', areas: ['Đống Đa', 'Thanh Xuân'], spots: ['Cơm rang dưa bò Yên Lãng', 'Cơm rang Chùa Bộc'], tags: ['sinh viên', 'ăn trưa'] },
  { id: 26, name: 'Cơm rang hải sản', emoji: '🍤', category: 'mon-kho', desc: 'Cơm rang vàng óng với tôm, mực, trứng và rau củ, thơm mùi chảo gang.', price: '50.000 – 90.000đ', areas: ['Hai Bà Trưng', 'Hoàng Mai'], spots: ['Cơm rang hải sản Bạch Mai'], tags: ['hải sản'] },
  { id: 27, name: 'Cơm gà Hội An', emoji: '🍗', category: 'mon-kho', desc: 'Cơm nghệ vàng ươm, gà xé phay mềm, rau răm và nước mắm gừng chan đều.', price: '45.000 – 80.000đ', areas: ['Cầu Giấy', 'Đống Đa'], spots: ['Cơm gà Phố Cổ'], tags: ['miền trung'] },
  { id: 28, name: 'Cơm gà xối mỡ', emoji: '🍗', category: 'mon-kho', desc: 'Gà ta chiên xối mỡ vàng giòn bên ngoài, mềm ngọt bên trong, ăn cùng cơm trắng.', price: '50.000 – 90.000đ', areas: ['Tây Hồ', 'Đống Đa'], spots: ['Cơm gà xối mỡ Thái Thịnh'], tags: ['giòn'] },
  { id: 29, name: 'Cơm hến', emoji: '🐚', category: 'mon-kho', desc: 'Cơm nguội trộn hến xào, ruốc, đậu phộng, rau sống và nước hến nóng hổi.', price: '35.000 – 60.000đ', areas: ['Hai Bà Trưng'], spots: ['Cơm hến Huế'], tags: ['miền trung'] },
  { id: 30, name: 'Xôi xéo', emoji: '🍚', category: 'mon-kho', desc: 'Xôi nếp vàng nghệ, đậu xanh nắm mịn, hành phi và mỡ nước béo ngậy.', price: '15.000 – 35.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Xôi xéo Hàng Bồ', 'Xôi Yến'], tags: ['ăn sáng', 'bình dân'] },
  { id: 31, name: 'Xôi gà', emoji: '🍗', category: 'mon-kho', desc: 'Xôi nếp dẻo, thịt gà kho mặn ngọt đậm đà, ăn kèm ruốc và hành phi.', price: '20.000 – 45.000đ', areas: ['Đống Đa', 'Cầu Giấy'], spots: ['Xôi gà Nguyễn Thái Học'], tags: ['ăn sáng'] },
  { id: 32, name: 'Xôi ngô', emoji: '🌽', category: 'mon-kho', desc: 'Ngô nếp non béo bùi trộn cùng gạo nếp và đậu xanh, ăn nóng với muối vừng.', price: '15.000 – 30.000đ', areas: ['Hoàn Kiếm', 'Ba Đình'], spots: ['Xôi ngô Hàng Đậu'], tags: ['ăn sáng'] },
  { id: 33, name: 'Bánh mì trứng Hà Nội', emoji: '🥖', category: 'mon-kho', desc: 'Bánh mì nóng giòn kẹp trứng ốp la, pate, dưa góp và tương ớt, rắc tiêu.', price: '15.000 – 35.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Bánh mì Hàng Cân', 'Bánh mì Đinh Liệt'], tags: ['bình dân', 'ăn sáng'] },
  { id: 34, name: 'Bánh mì chảo', emoji: '🍳', category: 'mon-kho', desc: 'Chảo gang nóng với trứng, pate, xúc xích, thịt bò và bánh mì giòn chấm cùng.', price: '35.000 – 65.000đ', areas: ['Hoàn Kiếm', 'Hai Bà Trưng'], spots: ['Bánh mì chảo Phố Cổ'], tags: ['ăn sáng'] },
  { id: 35, name: 'Bánh cuốn', emoji: '🍥', category: 'mon-kho', desc: 'Bánh cuốn tráng mỏng tang, nhân thịt mộc nhĩ, rắc hành phi và chả quế.', price: '25.000 – 50.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Bánh cuốn Bà Hoành', 'Bánh cuốn Thanh Trì'], tags: ['ăn sáng'] },
  { id: 36, name: 'Bánh đúc nóng', emoji: '🍮', category: 'mon-kho', desc: 'Bánh đúc mềm bột gạo, chan thịt băm mộc nhĩ, rắc hành hoa và tiêu.', price: '20.000 – 40.000đ', areas: ['Đống Đa', 'Hai Bà Trưng'], spots: ['Bánh đúc nóng Chùa Bộc'], tags: ['ăn sáng'] },
  { id: 37, name: 'Bánh đúc nộm', emoji: '🥗', category: 'mon-kho', desc: 'Bánh đúc nguội cắt sợi trộn nộm chua ngọt, lạc rang và rau thơm mát lạnh.', price: '15.000 – 30.000đ', areas: ['Hoàn Kiếm'], spots: ['Bánh đúc nộm Hàng Bè'], tags: ['mát lạnh'] },
  { id: 38, name: 'Bánh tôm Hồ Tây', emoji: '🦐', category: 'mon-kho', desc: 'Tôm tươi đặt trên khoai lang thái sợi, chiên vàng ươm, chấm nước mắm chua ngọt.', price: '35.000 – 60.000đ', areas: ['Tây Hồ'], spots: ['Bánh tôm Trấn Vũ', 'Bánh tôm Hồ Tây'], tags: ['đặc sản', 'ăn vặt'] },
  { id: 39, name: 'Bánh gối', emoji: '🥟', category: 'an-vat', desc: 'Vỏ bánh vàng ruộm giòn tan, nhân thịt mộc nhĩ miến, chấm nước chấm chua ngọt.', price: '10.000 – 30.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Bánh gối Hàng Chiếu'], tags: ['chiên', 'ăn vặt'] },
  { id: 40, name: 'Bánh xèo', emoji: '🥞', category: 'mon-kho', desc: 'Bánh xèo vỏ giòn vàng, nhân tôm thịt giá đỗ, ăn cuốn cùng rau sống và mắm nêm.', price: '30.000 – 60.000đ', areas: ['Hai Bà Trưng', 'Cầu Giấy'], spots: ['Bánh xèo Bà Sẩm'], tags: ['miền nam'] },
  { id: 41, name: 'Bánh khọt', emoji: '🥟', category: 'mon-kho', desc: 'Bánh khọt nhỏ xinh, đế giòn rìa vàng, nhân tôm tươi, ăn cùng rau sống.', price: '35.000 – 65.000đ', areas: ['Hoàng Mai'], spots: ['Bánh khọt Vũng Tàu'], tags: ['miền nam'] },
  { id: 42, name: 'Bánh căn', emoji: '🥞', category: 'mon-kho', desc: 'Bánh căn trứng cút nhỏ nhắn nướng trên khuôn đất, chan nước mắm xíu mại.', price: '35.000 – 65.000đ', areas: ['Hoàng Mai'], spots: ['Bánh căn Phan Xích Long'], tags: ['miền trung'] },
  { id: 43, name: 'Bánh bèo', emoji: '🥣', category: 'mon-kho', desc: 'Bánh bèo lá dừa trong veo, phủ đầy tôm chấy, mỡ hành và chan nước mắm ngọt.', price: '30.000 – 55.000đ', areas: ['Hai Bà Trưng'], spots: ['Bánh bèo Huế'], tags: ['miền trung'] },
  { id: 44, name: 'Nem nướng Nha Trang', emoji: '🥓', category: 'mon-kho', desc: 'Nem nướng thơm mỡ hành, cuốn với bánh tráng, rau sống và chấm nước lèo đậm.', price: '40.000 – 75.000đ', areas: ['Đống Đa'], spots: ['Nem nướng Ninh Hòa'], tags: ['miền trung'] },

  // ======================== ĂN VẶT ========================
  { id: 45, name: 'Nộm bò khô', emoji: '🥗', category: 'an-vat', desc: 'Đu đủ xanh thái sợi trộn bò khô cay, lạc rang, rau thơm và nước trộn chua ngọt.', price: '25.000 – 45.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Nộm bò khô Hàng Đào', 'Nộm Long Vi Dung'], tags: ['chua cay'] },
  { id: 46, name: 'Nộm hoa chuối', emoji: '🌺', category: 'an-vat', desc: 'Hoa chuối thái mỏng trộn tai heo giòn, rau thơm, lạc rang và nước mắm chua ngọt.', price: '25.000 – 45.000đ', areas: ['Hoàn Kiếm'], spots: ['Nộm hoa chuối Hàng Bè'], tags: ['giòn'] },
  { id: 47, name: 'Cút lộn xào me', emoji: '🥚', category: 'an-vat', desc: 'Trứng cút lộn chiên giòn áo sốt me chua ngọt sánh quyện, rắc đậu phộng và rau răm.', price: '30.000 – 50.000đ', areas: ['Đống Đa', 'Thanh Xuân'], spots: ['Cút lộn xào me Tạ Hiện'], tags: ['sốt me'] },
  { id: 48, name: 'Trứng vịt lộn', emoji: '🍳', category: 'an-vat', desc: 'Hột vịt lộn nóng hổi, ăn kèm muối tiêu chanh, rau răm và gừng tươi thái sợi.', price: '10.000 – 25.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Vỉa hè Hàng Đậu'], tags: ['đêm khuya'] },
  { id: 49, name: 'Chim quay', emoji: '🐦', category: 'an-vat', desc: 'Chim sẻ quay giòn rụm, ướp ngũ vị thơm nức, ăn cùng muối tiêu chanh.', price: '30.000 – 70.000đ', areas: ['Hoàn Kiếm', 'Ba Đình'], spots: ['Chim quay Tống Duy Tân'], tags: ['nhậu'] },
  { id: 50, name: 'Gà nướng ngũ vị', emoji: '🍗', category: 'an-vat', desc: 'Thịt gà ướp ngũ vị hương nướng than hồng, da giòn thơm, chấm muối tiêu.', price: '50.000 – 120.000đ', areas: ['Tây Hồ', 'Đống Đa'], spots: ['Gà nướng Hồ Tây'], tags: ['nướng'] },
  { id: 51, name: 'Nem chua rán', emoji: '🍡', category: 'an-vat', desc: 'Nem chua bọc bột chiên vàng giòn, vỏ giòn ruột chua ngọt, chấm tương ớt.', price: '20.000 – 50.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Nem chua rán Bảo Khánh', 'Nem chua rán Hàng Bông'], tags: ['chiên', 'ăn vặt'] },
  { id: 52, name: 'Chả mực', emoji: '🦑', category: 'an-vat', desc: 'Mực tươi giã tay dai giòn, chiên vàng tới khi nở phồng, chấm tương ớt.', price: '50.000 – 120.000đ', areas: ['Hoàn Kiếm', 'Tây Hồ'], spots: ['Chả mực Hàng Bè'], tags: ['hạ long'] },
  { id: 53, name: 'Bánh tráng nướng', emoji: '🫓', category: 'an-vat', desc: 'Bánh tráng nướng than giòn rụm, phết trứng, hành phi, ruốc và tương ớt.', price: '15.000 – 35.000đ', areas: ['Đống Đa', 'Thanh Xuân'], spots: ['Bánh tráng nướng Chùa Láng'], tags: ['sinh viên'] },
  { id: 54, name: 'Bánh tráng trộn', emoji: '🥗', category: 'an-vat', desc: 'Bánh tráng cắt sợi trộn khô bò, xoài xanh, trứng cút và sốt sa tế cay nồng.', price: '15.000 – 35.000đ', areas: ['Đống Đa', 'Cầu Giấy'], spots: ['Bánh tráng trộn Tạ Hiện'], tags: ['cay'] },
  { id: 55, name: 'Cá viên chiên', emoji: '🍢', category: 'an-vat', desc: 'Xiên cá viên, bò viên, tôm viên chiên vàng, chấm tương ớt và sa tế.', price: '10.000 – 40.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Cá viên chiên Hàng Bồ'], tags: ['sinh viên'] },
  { id: 56, name: 'Xúc xích chiên', emoji: '🌭', category: 'an-vat', desc: 'Xúc xích Đức xiên chiên giòn, cắt hoa nở đẹp mắt, chấm tương ớt.', price: '10.000 – 30.000đ', areas: ['Đống Đa'], spots: ['Xúc xích chiên Nguyễn Trãi'], tags: ['sinh viên'] },
  { id: 57, name: 'Tokbokki', emoji: '🌶️', category: 'an-vat', desc: 'Bánh gạo Hàn dai mềm sốt ớt đỏ au, ăn kèm chả cá và trứng luộc.', price: '35.000 – 70.000đ', areas: ['Đống Đa', 'Cầu Giấy'], spots: ['Tokbokki Chùa Láng'], tags: ['hàn quốc'] },
  { id: 58, name: 'Gà rán Hàn Quốc', emoji: '🍗', category: 'an-vat', desc: 'Gà rán giòn rụm áo sốt mật ong hoặc sốt cay, rắc vừng và ăn cùng củ cải.', price: '80.000 – 200.000đ', areas: ['Đống Đa', 'Hai Bà Trưng'], spots: ['Gà rán Gangnam'], tags: ['hàn quốc'] },
  { id: 59, name: 'Khoai tây chiên', emoji: '🍟', category: 'an-vat', desc: 'Khoai tây chiên giòn vàng, rắc phô mai hoặc sốt phô mai béo ngậy.', price: '25.000 – 55.000đ', areas: ['Cầu Giấy', 'Đống Đa'], spots: ['Lotteria', 'Khoai tây chiên Phan Đình Phùng'], tags: ['nhanh'] },
  { id: 60, name: 'Súp cua', emoji: '🥣', category: 'an-vat', desc: 'Súp cua sánh mịn với trứng bắc thảo, thịt cua và ngô ngọt, ăn nóng.', price: '25.000 – 45.000đ', areas: ['Hoàn Kiếm', 'Hai Bà Trưng'], spots: ['Súp cua Hàng Bồ'], tags: ['ấm bụng'] },
  { id: 61, name: 'Há cảo hấp', emoji: '🥟', category: 'an-vat', desc: 'Há cảo vỏ mỏng trong veo, nhân tôm thịt ngọt, chấm xì dầu giấm ớt.', price: '25.000 – 60.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Há cảo Hàng Bồ'], tags: ['dimsum'] },
  { id: 62, name: 'Sủi cảo chiên', emoji: '🥟', category: 'an-vat', desc: 'Sủi cảo nhân tôm thịt, đáy chiên vàng giòn, ăn cùng dưa góp và xì dầu.', price: '30.000 – 65.000đ', areas: ['Hoàn Kiếm'], spots: ['Sủi cảo Hàng Chiếu'], tags: ['dimsum'] },
  { id: 63, name: 'Bò nướng lá lốt', emoji: '🥬', category: 'an-vat', desc: 'Thịt bò băm cuốn lá lốt nướng than thơm lừng, chấm nước chấm chua ngọt.', price: '35.000 – 70.000đ', areas: ['Đống Đa', 'Cầu Giấy'], spots: ['Bò lá lốt Hàng Điếu'], tags: ['nướng'] },
  { id: 64, name: 'Ốc xào me', emoji: '🐚', category: 'an-vat', desc: 'Ốc nhồi xào sốt me chua ngọt sền sệt, cay nhẹ, hút kiểu gì cũng ghiền.', price: '35.000 – 90.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Ốc Tô Hiến Thành', 'Ốc Ngang Hàng Đồng'], tags: ['đêm', 'nhậu'] },
  { id: 65, name: 'Ốc luộc sả', emoji: '🐚', category: 'an-vat', desc: 'Ốc luộc cùng sả, gừng và lá chanh, chấm nước mắm gừng ớt cay nồng.', price: '30.000 – 70.000đ', areas: ['Đống Đa', 'Hai Bà Trưng'], spots: ['Ốc Marko', 'Ốc Chợ Hôm'], tags: ['nhậu'] },
  { id: 66, name: 'Ngao hấp Thái', emoji: '🥘', category: 'an-vat', desc: 'Ngao tươi hấp nước dùng chua cay kiểu Thái, thơm sả, rau mùi và ớt tươi.', price: '40.000 – 90.000đ', areas: ['Đống Đa', 'Cầu Giấy'], spots: ['Ngao hấp Thái Nguyễn Chí Thanh'], tags: ['chua cay'] },
  { id: 67, name: 'Hàu nướng mỡ hành', emoji: '🦪', category: 'an-vat', desc: 'Hàu biển nướng trên than với mỡ hành, đậu phộng và muối tiêu chanh.', price: '40.000 – 120.000đ', areas: ['Đống Đa', 'Hai Bà Trưng'], spots: ['Hàu nướng Lò Đúc'], tags: ['hải sản'] },
  { id: 68, name: 'Mực nướng sa tế', emoji: '🦑', category: 'an-vat', desc: 'Mực tươi nướng sa tế cay nồng, dai ngọt thơm khói, chấm muối ớt chanh.', price: '60.000 – 150.000đ', areas: ['Tây Hồ', 'Đống Đa'], spots: ['Mực nướng Hồ Tây'], tags: ['hải sản'] },
  { id: 69, name: 'Bạch tuộc nướng', emoji: '🐙', category: 'an-vat', desc: 'Bạch tuộc nướng than hoa giòn sần sật, chấm muối tiêu chanh hoặc sốt ớt.', price: '60.000 – 150.000đ', areas: ['Tây Hồ', 'Hai Bà Trưng'], spots: ['Bạch tuộc nướng Trần Khát Chân'], tags: ['hải sản'] },
  { id: 70, name: 'Nem chua', emoji: '🍖', category: 'an-vat', desc: 'Nem chua chua cay đặc trưng, ăn cùng lá đinh lăng, tỏi và tương ớt.', price: '20.000 – 50.000đ', areas: ['Hoàn Kiếm', 'Ba Đình'], spots: ['Nem chua Thanh Hóa'], tags: ['chua'] },
  { id: 71, name: 'Chè chả', emoji: '🍢', category: 'an-vat', desc: 'Chả lá lốt thơm nướng ăn cùng chè nóng ngọt — combo lạ miệng mà ghiền.', price: '25.000 – 50.000đ', areas: ['Hoàn Kiếm'], spots: ['Quà vặt Hàng Bồ'], tags: ['lạ miệng'] },
  { id: 72, name: 'Bánh bao chiên', emoji: '🥟', category: 'an-vat', desc: 'Bánh bao nhân thịt trứng cút chiên ngập dầu, vỏ vàng giòn ruột mềm.', price: '15.000 – 35.000đ', areas: ['Đống Đa', 'Thanh Xuân'], spots: ['Bánh bao chiên Chùa Láng'], tags: ['chiên'] },
  { id: 73, name: 'Cơm cuộn rong biển', emoji: '🍙', category: 'an-vat', desc: 'Gimbap nhân trứng, cà rốt, dưa chuột, xúc xích và thanh cua cuộn rong biển.', price: '25.000 – 55.000đ', areas: ['Đống Đa', 'Cầu Giấy'], spots: ['Gimbap Chùa Láng'], tags: ['hàn quốc'] },
  { id: 74, name: 'Phồng tôm trộn', emoji: '🍤', category: 'an-vat', desc: 'Phồng tôm giòn rụm trộn sốt chua cay, xoài xanh và rau răm, cay nồng vị sa tế.', price: '15.000 – 30.000đ', areas: ['Đống Đa'], spots: ['Phồng tôm trộn Tạ Hiện'], tags: ['cay'] },
  { id: 75, name: 'Chè bưởi', emoji: '🍵', category: 'trang-mieng', desc: 'Bưởi cùi giòn dai, đậu xanh bùi, nước cốt dừa béo ngậy và đá mát lạnh.', price: '20.000 – 40.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Chè Bưởi Hàng Cân'], tags: ['mát lạnh'] },
  { id: 76, name: 'Chè thập cẩm', emoji: '🍧', category: 'trang-mieng', desc: 'Đủ loại đậu, khoai, thạch, trân châu và nước cốt dừa trong một ly đầy ắp.', price: '20.000 – 40.000đ', areas: ['Hoàn Kiếm', 'Hai Bà Trưng'], spots: ['Chè Hàng Cân', 'Chè Mười Sáu'], tags: ['mát lạnh'] },
  { id: 77, name: 'Chè khúc bạch', emoji: '🍮', category: 'trang-mieng', desc: 'Khúc bạch mềm mịn vị hạnh nhân, nhãn nhục ngọt thanh và nước cốt dừa thơm.', price: '25.000 – 50.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Chè khúc bạch Hàng Điếu'], tags: ['mát lạnh'] },
  { id: 78, name: 'Chè sen long nhãn', emoji: '🪷', category: 'trang-mieng', desc: 'Hạt sen bùi ngọt bọc trong nhãn nhục, nước đường phèn trong thanh mát.', price: '30.000 – 60.000đ', areas: ['Hoàn Kiếm', 'Ba Đình'], spots: ['Chè sen Hàng Đào'], tags: ['thanh mát'] },
  { id: 79, name: 'Chè Thái', emoji: '🥭', category: 'trang-mieng', desc: 'Thạch, trân châu, thốt nốt và các loại trái cây trong nước cốt dừa béo ngọt.', price: '25.000 – 50.000đ', areas: ['Đống Đa', 'Cầu Giấy'], spots: ['Chè Thái Thái Thịnh'], tags: ['trái cây'] },
  { id: 80, name: 'Chè đỗ đen', emoji: '🫘', category: 'trang-mieng', desc: 'Đỗ đen nấu mềm bùi, thêm nước cốt dừa và đá, giải nhiệt mùa hè cực đỉnh.', price: '15.000 – 30.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Chè đỗ đen Hàng Bạc'], tags: ['dân dã'] },
  { id: 81, name: 'Chè trôi nước', emoji: '🍡', category: 'trang-mieng', desc: 'Bánh trôi nhân đường mè đen, nước gừng ấm nồng, rắc dừa nạo và vừng rang.', price: '20.000 – 35.000đ', areas: ['Hoàn Kiếm', 'Ba Đình'], spots: ['Chè trôi nước Hàng Giầy'], tags: ['ấm nóng'] },
  { id: 82, name: 'Tào phớ', emoji: '🥣', category: 'trang-mieng', desc: 'Đậu hũ non mềm tan trong miệng, nước đường gừng thơm nhẹ, ăn nóng hay lạnh đều ngon.', price: '10.000 – 25.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Tào phớ Hàng Cân'], tags: ['dân dã'] },
  { id: 83, name: 'Sữa chua nếp cẩm', emoji: '🍨', category: 'trang-mieng', desc: 'Sữa chua chua dịu ăn kèm nếp cẩm dẻo ngọt, thêm đá mát lạnh sảng khoái.', price: '20.000 – 40.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Sữa chua nếp cẩm Hàng Bạc'], tags: ['mát lạnh'] },
  { id: 84, name: 'Kem Tràng Tiền', emoji: '🍦', category: 'trang-mieng', desc: 'Kem que huyền thoại Hà Nội với vị cốm, đậu xanh và sữa dừa, ăn là nhớ tuổi thơ.', price: '10.000 – 25.000đ', areas: ['Hoàn Kiếm'], spots: ['Kem Tràng Tiền'], tags: ['huyền thoại'] },
  { id: 85, name: 'Kem xôi', emoji: '🍧', category: 'trang-mieng', desc: 'Xôi nếp mềm nóng ăn cùng kem lạnh, tương phản nóng lạnh thú vị.', price: '20.000 – 40.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Kem xôi Hàng Khay'], tags: ['lạ miệng'] },
  { id: 86, name: 'Bánh flan', emoji: '🍮', category: 'trang-mieng', desc: 'Bánh flan mềm mượt, caramel đắng nhẹ, ăn cùng cà phê đen hoặc đá.', price: '15.000 – 35.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Bánh flan Hàng Bạc'], tags: ['ngọt'] },
  { id: 87, name: 'Chè bà ba', emoji: '🍲', category: 'trang-mieng', desc: 'Chè miền Nam với khoai môn, khoai lang, bột báng và nước cốt dừa béo.', price: '20.000 – 40.000đ', areas: ['Hoàng Mai'], spots: ['Chè bà ba Trương Định'], tags: ['nam bộ'] },
  { id: 88, name: 'Rau câu dừa', emoji: '🥥', category: 'trang-mieng', desc: 'Rau câu trong veo trong trái dừa tươi, vị ngọt thanh tự nhiên, mát rượi.', price: '20.000 – 45.000đ', areas: ['Đống Đa', 'Cầu Giấy'], spots: ['Rau câu dừa Thái Hà'], tags: ['mát lạnh'] },
  { id: 89, name: 'Chè kho', emoji: '🟤', category: 'trang-mieng', desc: 'Đỗ xanh giã nhuyễn sên đường tới khi dẻo quánh, cắt miếng vuông xinh xắn.', price: '25.000 – 45.000đ', areas: ['Hoàn Kiếm'], spots: ['Chè kho Hàng Điếu'], tags: ['truyền thống'] },
  { id: 90, name: 'Bánh trôi Tàu', emoji: '🥟', category: 'trang-mieng', desc: 'Bánh trôi nhân đậu xanh, chan nước gừng đường phèn, rắc dừa nạo và vừng.', price: '20.000 – 40.000đ', areas: ['Hoàn Kiếm'], spots: ['Bánh trôi Tàu Hàng Buồm'], tags: ['ấm nóng'] },
  { id: 91, name: 'Chè đậu đỏ', emoji: '🫘', category: 'trang-mieng', desc: 'Đậu đỏ hầm mềm bùi ngọt, thêm nước cốt dừa và chút muối cho đậm vị.', price: '15.000 – 30.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Chè đậu đỏ Hàng Cân'], tags: ['dân dã'] },
  { id: 92, name: 'Caramen cà phê', emoji: '☕', category: 'trang-mieng', desc: 'Caramen mềm thơm mùi trứng sữa, phủ lớp cà phê đắng nhẹ cân bằng vị ngọt.', price: '15.000 – 35.000đ', areas: ['Hoàn Kiếm'], spots: ['Caramen Hàng Thanh'], tags: ['ngọt'] },

  // ======================== ĐỒ UỐNG ========================
  { id: 93, name: 'Cà phê trứng', emoji: '☕', category: 'do-uong', desc: 'Lớp kem trứng đánh bông vàng mịn trên nền cà phê đậm đặc — đặc sản đất Hà thành.', price: '30.000 – 60.000đ', areas: ['Hoàn Kiếm', 'Ba Đình'], spots: ['Cà phê Giảng', 'Cà phê Đinh', 'Cà phê Lâm'], tags: ['đặc sản', 'huyền thoại'] },
  { id: 94, name: 'Cà phê sữa đá', emoji: '🥛', category: 'do-uong', desc: 'Cà phê phin đậm quyện sữa đặc ngọt ngào, đá viên mát lạnh cho ngày Hà Nội.', price: '20.000 – 45.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Cà phê Nhân', 'Cà phê Mai'], tags: ['kinh điển'] },
  { id: 95, name: 'Cà phê muối', emoji: '🧂', category: 'do-uong', desc: 'Vị mặn nhẹ của kem muối hòa cùng cà phê đắng, tạo tầng hương lạ mà cuốn.', price: '30.000 – 60.000đ', areas: ['Hoàn Kiếm', 'Cầu Giấy'], spots: ['Cà phê muối Hàng Bạc'], tags: ['trend'] },
  { id: 96, name: 'Bạc xỉu', emoji: '🥛', category: 'do-uong', desc: 'Nhiều sữa ít cà phê, ngọt dịu và béo mịn, uống là thấy dễ chịu cả ngày.', price: '25.000 – 50.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Bạc xỉu Phố Cổ'], tags: ['nhẹ'] },
  { id: 97, name: 'Cà phê dừa', emoji: '🥥', category: 'do-uong', desc: 'Cà phê đá xay cùng kem dừa béo ngậy, thơm mùi dừa tươi mát lạnh.', price: '35.000 – 65.000đ', areas: ['Đống Đa', 'Cầu Giấy'], spots: ['Cà phê dừa Thái Hà'], tags: ['béo'] },
  { id: 98, name: 'Trà sữa trân châu', emoji: '🧋', category: 'do-uong', desc: 'Trà sữa béo thơm, trân châu đường đen dai mềm, ngọt ngào đúng gu.', price: '35.000 – 75.000đ', areas: ['Đống Đa', 'Cầu Giấy', 'Hai Bà Trưng'], spots: ['Koi Thé', 'Gong Cha', 'Phê La'], tags: ['hot trend'] },
  { id: 99, name: 'Trà đào cam sả', emoji: '🍑', category: 'do-uong', desc: 'Trà đen thơm, đào ngâm ngọt mọng, cam tươi và sả thơm the mát lạnh.', price: '35.000 – 65.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Trà đào Hàng Bạc'], tags: ['mát lạnh'] },
  { id: 100, name: 'Trà chanh', emoji: '🍋', category: 'do-uong', desc: 'Trà xanh pha chanh tươi và đường, chua ngọt hài hòa, uống mát rười rượi.', price: '15.000 – 35.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Trà chanh Nhà Thờ'], tags: ['bình dân'] },
  { id: 101, name: 'Trà sữa Thái', emoji: '🧋', category: 'do-uong', desc: 'Trà Thái đỏ cam đặc trưng, vị đậm ngọt béo, thêm trân châu và thạch.', price: '30.000 – 60.000đ', areas: ['Đống Đa', 'Hai Bà Trưng'], spots: ['Trà sữa Thái Tạ Hiện'], tags: ['ngọt đậm'] },
  { id: 102, name: 'Sinh tố bơ', emoji: '🥑', category: 'do-uong', desc: 'Bơ sáp xay nhuyễn cùng sữa đặc béo ngậy, thêm đá xay mát lịm.', price: '30.000 – 55.000đ', areas: ['Đống Đa', 'Hoàn Kiếm'], spots: ['Sinh tố bơ Hàng Bạc'], tags: ['béo'] },
  { id: 103, name: 'Sinh tố mãng cầu', emoji: '🍹', category: 'do-uong', desc: 'Mãng cầu chín xay mịn, vị ngọt chua hài hòa, thơm đặc trưng khó quên.', price: '30.000 – 55.000đ', areas: ['Hoàn Kiếm'], spots: ['Sinh tố mãng cầu Hàng Đường'], tags: ['trái cây'] },
  { id: 104, name: 'Nước sấu', emoji: '🫒', category: 'do-uong', desc: 'Sấu ngâm đường chua ngọt thanh mát, thức uống mùa hè kinh điển của người Hà Nội.', price: '15.000 – 35.000đ', areas: ['Hoàn Kiếm', 'Ba Đình'], spots: ['Nước sấu Hàng Đường'], tags: ['mùa hè'] },
  { id: 105, name: 'Nước mơ', emoji: '🍑', category: 'do-uong', desc: 'Mơ ngâm chua ngọt với chút muối, uống vào thấy dịu hết cơn khát.', price: '15.000 – 30.000đ', areas: ['Hoàn Kiếm'], spots: ['Nước mơ Hàng Đường'], tags: ['mùa hè'] },
  { id: 106, name: 'Nước ép cam', emoji: '🍊', category: 'do-uong', desc: 'Cam tươi vắt nguyên chất, giàu vitamin C, chua ngọt tự nhiên mát lành.', price: '25.000 – 50.000đ', areas: ['Đống Đa', 'Cầu Giấy'], spots: ['Nước ép Thái Thịnh'], tags: ['healthy'] },
  { id: 107, name: 'Sữa đậu nành', emoji: '🥛', category: 'do-uong', desc: 'Đậu nành xay nóng thơm béo, ngọt dịu, uống cùng quẩy là combo sáng hoàn hảo.', price: '8.000 – 20.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Sữa đậu nành Hàng Đường'], tags: ['ăn sáng'] },
  { id: 108, name: 'Bia hơi Hà Nội', emoji: '🍺', category: 'do-uong', desc: 'Bia hơi vàng óng mát lạnh, uống cùng lạc rang và nem chua là chuẩn vị Hà thành.', price: '15.000 – 30.000đ', areas: ['Hoàn Kiếm', 'Hai Bà Trưng'], spots: ['Bia hơi Tạ Hiện', 'Bia hơi Lê Ngọc Hân'], tags: ['nhậu', 'đêm'] },
  { id: 109, name: 'Bia tươi Tiệp', emoji: '🍺', category: 'do-uong', desc: 'Bia tươi vàng sánh, bọt mịn, uống lạnh sảng khoái trong những buổi tối Hà Nội.', price: '25.000 – 60.000đ', areas: ['Hoàn Kiếm', 'Hai Bà Trưng'], spots: ['Bia tươi Tiệp'], tags: ['nhậu'] },
  { id: 110, name: 'Rượu nếp cẩm', emoji: '🍶', category: 'do-uong', desc: 'Rượu nếp cẩm ngọt nhẹ, thơm mùi nếp lên men, uống ấm người ngày se lạnh.', price: '20.000 – 50.000đ', areas: ['Hoàn Kiếm'], spots: ['Rượu nếp Hàng Đường'], tags: ['ấm'] },
  { id: 111, name: 'Nước mía', emoji: '🥤', category: 'do-uong', desc: 'Mía tươi ép lấy nước ngọt lịm, thêm quất và gừng cho thơm mát sảng khoái.', price: '10.000 – 25.000đ', areas: ['Đống Đa', 'Hoàng Mai'], spots: ['Nước mía Nguyễn Trãi'], tags: ['mùa hè'] },
  { id: 112, name: 'Cacao nóng', emoji: '🍫', category: 'do-uong', desc: 'Cacao đậm đặc nóng hổi, béo nhẹ và ngọt dịu, làm ấm tay ngày đông.', price: '30.000 – 60.000đ', areas: ['Hoàn Kiếm', 'Tây Hồ'], spots: ['Cacao nóng Hồ Tây'], tags: ['mùa đông'] },
  { id: 113, name: 'Matcha latte', emoji: '🍵', category: 'do-uong', desc: 'Matcha Nhật đắng nhẹ quyện sữa tươi béo mịn, thơm mùi trà xanh thanh tao.', price: '40.000 – 75.000đ', areas: ['Hoàn Kiếm', 'Tây Hồ'], spots: ['Matcha Hàng Bạc'], tags: ['nhật bản'] },
  { id: 114, name: 'Trà sen', emoji: '🪷', category: 'do-uong', desc: 'Trà ướp hương sen Tây Hồ thanh khiết, nhẹ nhàng mà đậm đà hương quê.', price: '40.000 – 100.000đ', areas: ['Tây Hồ', 'Ba Đình'], spots: ['Trà sen Hồ Tây'], tags: ['truyền thống'] },
  { id: 115, name: 'Trà đào Hồ Tây', emoji: '🍑', category: 'do-uong', desc: 'Ngồi ngắm hồ Tây hoàng hôn, nhấm nháp ly trà đào mát lạnh — quá chill.', price: '35.000 – 70.000đ', areas: ['Tây Hồ'], spots: ['Trà đào ven Hồ Tây'], tags: ['chill'] },
  { id: 116, name: 'Sữa chua uống', emoji: '🥛', category: 'do-uong', desc: 'Sữa chua uống mát lạnh vị chua ngọt hài hòa, tốt cho tiêu hóa, uống là ghiền.', price: '10.000 – 25.000đ', areas: ['Đống Đa', 'Hai Bà Trưng'], spots: ['Sữa chua uống Vinamilk'], tags: ['healthy'] },
  { id: 117, name: 'Trà hoa cúc', emoji: '🌼', category: 'do-uong', desc: 'Hoa cúc khô hãm nước ấm, thơm dịu, thanh nhiệt và thư giãn tinh thần.', price: '25.000 – 50.000đ', areas: ['Hoàn Kiếm'], spots: ['Trà hoa cúc Hàng Bạc'], tags: ['thư giãn'] },
  { id: 118, name: 'Trà vải', emoji: '🍒', category: 'do-uong', desc: 'Vải thiều ngâm thơm ngọt kết hợp trà xanh, mát lạnh và thơm mùi vải chín.', price: '30.000 – 60.000đ', areas: ['Đống Đa', 'Cầu Giấy'], spots: ['Trà vải Thái Hà'], tags: ['mát lạnh'] },
  { id: 119, name: 'Dừa tươi', emoji: '🥥', category: 'do-uong', desc: 'Dừa xiêm tươi mát, nước ngọt tự nhiên, múc cả cùi dừa non mềm béo.', price: '20.000 – 40.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Dừa tươi vỉa hè'], tags: ['mát lạnh'] },

  // ======================== NƯỚNG & LẨU ========================
  { id: 120, name: 'Lẩu Thái hải sản', emoji: '🍲', category: 'nuong-lau', desc: 'Nước lẩu chua cay đậm vị sả riềng, hải sản tươi, nấm và rau nhúng tha hồ.', price: '150.000 – 350.000đ', areas: ['Đống Đa', 'Cầu Giấy', 'Hai Bà Trưng'], spots: ['Lẩu Thái Thái Thịnh', 'Lẩu Thái Nguyễn Chí Thanh'], tags: ['chua cay', 'nhóm'] },
  { id: 121, name: 'Lẩu bò nhúng dấm', emoji: '🥩', category: 'nuong-lau', desc: 'Thịt bò tươi nhúng dấm chua nhẹ, cuốn bánh tráng với rau sống và chấm mắm nêm.', price: '150.000 – 300.000đ', areas: ['Đống Đa', 'Cầu Giấy'], spots: ['Lẩu bò nhúng dấm Trần Duy Hưng'], tags: ['nhóm'] },
  { id: 122, name: 'Lẩu gà lá é', emoji: '🐓', category: 'nuong-lau', desc: 'Gà ta nhúng nước lẩu lá é thơm nồng đặc trưng, ăn kèm mì tôm và rau rừng.', price: '180.000 – 350.000đ', areas: ['Cầu Giấy', 'Nam Từ Liêm'], spots: ['Lẩu gà lá é Lê Đức Thọ'], tags: ['đặc sản'] },
  { id: 123, name: 'Lẩu ếch măng cay', emoji: '🐸', category: 'nuong-lau', desc: 'Ếch thịt chắc ngọt nhúng nước lẩu măng chua cay nồng, thêm đậu và hoa chuối.', price: '180.000 – 350.000đ', areas: ['Đống Đa', 'Thanh Xuân'], spots: ['Lẩu ếch Tô Hiến Thành'], tags: ['cay'] },
  { id: 124, name: 'Lẩu cua đồng', emoji: '🦀', category: 'nuong-lau', desc: 'Nước lẩu cua đồng ngọt lịm, gạch cua béo, nhúng rau muống và cà chua.', price: '150.000 – 300.000đ', areas: ['Hai Bà Trưng', 'Hoàng Mai'], spots: ['Lẩu cua đồng Lò Đúc'], tags: ['đồng quê'] },
  { id: 125, name: 'Lẩu nấm', emoji: '🍄', category: 'nuong-lau', desc: 'Nước lẩu nấm thanh ngọt, các loại nấm tươi, đậu phụ và rau củ nhúng.', price: '150.000 – 300.000đ', areas: ['Đống Đa', 'Cầu Giấy'], spots: ['Lẩu nấm chay'], tags: ['healthy', 'chay'] },
  { id: 126, name: 'Lẩu riêu cua', emoji: '🦀', category: 'nuong-lau', desc: 'Nước lẩu riêu cua đậm vị, gạch cua, ốc, đậu và bắp bò nhúng chung.', price: '180.000 – 350.000đ', areas: ['Hai Bà Trưng'], spots: ['Lẩu riêu cua Bạch Mai'], tags: ['đặc sản'] },
  { id: 127, name: 'Buffet nướng BBQ', emoji: '🔥', category: 'nuong-lau', desc: 'Bàn nướng than hoa với bò, heo, hải sản, rau củ tha hồ chọn, ăn thỏa thích.', price: '169.000 – 299.000đ', areas: ['Đống Đa', 'Cầu Giấy', 'Thanh Xuân'], spots: ['Kichi Kichi', 'Gogi House', 'Haiz BBQ'], tags: ['buffet', 'nhóm'] },
  { id: 128, name: 'Buffet hải sản', emoji: '🦐', category: 'nuong-lau', desc: 'Tôm hùm, hàu, mực, nghêu, cá hồi... ăn không giới hạn với nhiều cách chế biến.', price: '350.000 – 700.000đ', areas: ['Đống Đa', 'Cầu Giấy'], spots: ['Buffet hải sản Phan Xích Long'], tags: ['buffet', 'hải sản'] },
  { id: 129, name: 'Buffet lẩu', emoji: '🍲', category: 'nuong-lau', desc: 'Tự chọn nguyên liệu nhúng lẩu Thái, lẩu Nhật, lẩu tom yum, ăn bao no.', price: '179.000 – 329.000đ', areas: ['Hai Bà Trưng', 'Thanh Xuân'], spots: ['Ashima', 'Hutong'], tags: ['buffet'] },
  { id: 130, name: 'Buffet chay', emoji: '🥗', category: 'nuong-lau', desc: 'Thực đơn chay phong phú từ nấm, đậu, rau củ, thanh đạm mà ngon miệng.', price: '149.000 – 279.000đ', areas: ['Đống Đa', 'Tây Hồ'], spots: ['Buffet chay An Nhiên'], tags: ['chay', 'healthy'] },
  { id: 131, name: 'Nướng ngói', emoji: '🍖', category: 'nuong-lau', desc: 'Thịt bò, hải sản nướng trên ngói đất nóng, cháy cạnh thơm lừng, chấm muối ớt.', price: '180.000 – 400.000đ', areas: ['Đống Đa', 'Cầu Giấy'], spots: ['Nướng ngói Tăng Bạt Hổ'], tags: ['nhóm'] },
  { id: 132, name: 'Ba chỉ bò nướng', emoji: '🥩', category: 'nuong-lau', desc: 'Ba chỉ bò mềm ngọt nướng than, cuốn lá xà lách, kim chi và chấm ssamjang.', price: '150.000 – 350.000đ', areas: ['Đống Đa', 'Hai Bà Trưng'], spots: ['Ba chỉ bò nướng Hàn'], tags: ['hàn quốc'] },
  { id: 133, name: 'Dê tái chanh', emoji: '🐐', category: 'nuong-lau', desc: 'Thịt dê tái mềm ngọt, ướp chanh sả ớt, ăn kèm lá húng và nước chấm đặc biệt.', price: '150.000 – 300.000đ', areas: ['Nam Từ Liêm', 'Hoàng Mai'], spots: ['Dê tái chanh Mỹ Đình'], tags: ['nhậu'] },
  { id: 134, name: 'Gà tần thuốc bắc', emoji: '🍲', category: 'nuong-lau', desc: 'Gà ác hầm thuốc bắc bổ dưỡng, nước ngọt thơm, ấm người và tốt sức khỏe.', price: '80.000 – 200.000đ', areas: ['Ba Đình', 'Đống Đa'], spots: ['Gà tần Lý Nam Đế'], tags: ['bổ dưỡng'] },
  { id: 135, name: 'Chả cá Lã Vọng', emoji: '🐟', category: 'mon-kho', desc: 'Cá lăng ướp nghệ, thì là, hành tây xào trên chảo mỡ nóng, ăn cùng bún và mắm tôm.', price: '150.000 – 300.000đ', areas: ['Hoàn Kiếm'], spots: ['Chả cá Lã Vọng Chả Cá'], tags: ['đặc sản', 'trứ danh'] },
  { id: 136, name: 'Thịt nướng kiểu Hàn', emoji: '🥓', category: 'nuong-lau', desc: 'Ba chỉ heo nướng mỡ chảy xèo xèo, cuốn xà lách, tỏi và ssamjang đậm đà.', price: '150.000 – 350.000đ', areas: ['Đống Đa', 'Cầu Giấy'], spots: ['Nướng Hàn Quốc K-Town'], tags: ['hàn quốc'] },

  // ======================== BÁNH ========================
  { id: 137, name: 'Bánh cốm Hàng Than', emoji: '🍡', category: 'banh', desc: 'Cốm xanh dẻo bọc đậu xanh ngọt bùi, hương cốm thơm mát — quà Hà Nội trứ danh.', price: '20.000 – 45.000đ', areas: ['Hoàn Kiếm', 'Ba Đình'], spots: ['Bánh cốm Nguyên Ninh', 'Bánh cốm Hàng Than'], tags: ['quà biếu', 'truyền thống'] },
  { id: 138, name: 'Bánh đậu xanh', emoji: '🟡', category: 'banh', desc: 'Đậu xanh sên nhuyễn ngọt bùi, đóng khuôn vuông xinh, ăn cùng trà nóng tuyệt.', price: '25.000 – 60.000đ', areas: ['Hoàn Kiếm'], spots: ['Bánh đậu xanh Bảo Hiên'], tags: ['quà biếu'] },
  { id: 139, name: 'Bánh gai', emoji: '🟢', category: 'banh', desc: 'Vỏ nếp lá gai đen mịn, nhân đậu xanh dừa ngọt bùi, gói lá chuối thơm.', price: '15.000 – 30.000đ', areas: ['Hoàn Kiếm', 'Hà Đông'], spots: ['Bánh gai Hàng Cân'], tags: ['truyền thống'] },
  { id: 140, name: 'Bánh trung thu', emoji: '🌕', category: 'banh', desc: 'Bánh nướng bánh dẻo nhân đậu xanh, hạt sen, thập cẩm — mùa trăng sum vầy.', price: '60.000 – 200.000đ', areas: ['Hoàn Kiếm', 'Ba Đình'], spots: ['Bánh trung thu Bảo Phương', 'Bánh trung thu Hữu Nghị'], tags: ['theo mùa'] },
  { id: 141, name: 'Bánh chè lam', emoji: '🍬', category: 'banh', desc: 'Chè lam dẻo dai vị gừng nồng, lạc rang bùi, ngọt dịu chuẩn vị quê.', price: '20.000 – 50.000đ', areas: ['Ba Đình', 'Hà Đông'], spots: ['Chè lam Thạch Thất'], tags: ['quà quê'] },
  { id: 142, name: 'Bánh xu xê', emoji: '🌸', category: 'banh', desc: 'Vỏ bánh trong suốt như pha lê, nhân đậu xanh dừa ngọt, thơm mùi lá dừa.', price: '20.000 – 50.000đ', areas: ['Hoàn Kiếm'], spots: ['Bánh xu xê Hàng Đường'], tags: ['truyền thống'] },
  { id: 143, name: 'Bánh pía', emoji: '🥮', category: 'banh', desc: 'Vỏ bánh nghìn lớp mềm xốp, nhân sầu riêng đậu xanh béo ngọt, thơm nức.', price: '20.000 – 50.000đ', areas: ['Đống Đa', 'Hoàng Mai'], spots: ['Bánh pía Phan Xích Long'], tags: ['nam bộ'] },
  { id: 144, name: 'Bánh cupcake', emoji: '🧁', category: 'banh', desc: 'Bánh cupcake nhỏ xinh phủ kem bơ, topping trái tim ngọt ngào làm quà cho crush.', price: '25.000 – 55.000đ', areas: ['Hoàn Kiếm', 'Tây Hồ'], spots: ['Tiệm bánh Phố Cổ'], tags: ['ngọt ngào'] },
  { id: 145, name: 'Bánh kem tươi', emoji: '🎂', category: 'banh', desc: 'Cốt bánh mềm ẩm, kem tươi mát lạnh, phủ đầy trái cây tươi — mừng ngày đặc biệt.', price: '150.000 – 500.000đ', areas: ['Hoàn Kiếm', 'Cầu Giấy'], spots: ['Bakery Phố Cổ'], tags: ['sinh nhật'] },
  { id: 146, name: 'Bánh su kem', emoji: '🍩', category: 'banh', desc: 'Vỏ su giòn nhẹ, nhân kem vani mát lạnh, ngọt vừa phải, ăn một cái muốn hai.', price: '15.000 – 40.000đ', areas: ['Hoàn Kiếm', 'Đống Đa'], spots: ['Bánh su kem Hàng Bồ'], tags: ['ngọt'] },
  { id: 147, name: 'Bánh mì ngọt', emoji: '🥐', category: 'banh', desc: 'Bánh mì ngọt vỏ giòn ruột mềm, phết pate sữa hoặc mứt dừa, thơm mùi bơ.', price: '10.000 – 30.000đ', areas: ['Hoàn Kiếm'], spots: ['Bánh mì ngọt Hàng Đường'], tags: ['ăn sáng'] },
  { id: 148, name: 'Tiramisu', emoji: '🍰', category: 'banh', desc: 'Cốt bánh thấm cà phê đắng, lớp phô mai mascarpone mịn béo, phủ bột cacao.', price: '45.000 – 90.000đ', areas: ['Tây Hồ', 'Hoàn Kiếm'], spots: ['Tiệm bánh Hồ Tây'], tags: ['ý'] },
  { id: 149, name: 'Macaron', emoji: '🍬', category: 'banh', desc: 'Macaron Pháp vỏ giòn ruột mềm dai, đủ vị trái cây sắc màu xinh xắn.', price: '35.000 – 70.000đ', areas: ['Hoàn Kiếm', 'Tây Hồ'], spots: ['Macaron Hàng Bạc'], tags: ['pháp'] },
  { id: 150, name: 'Cheesecake', emoji: '🧀', category: 'banh', desc: 'Cheesecake mịn béo vị phô mai, đế bánh quy giòn, phủ sốt dâu chua ngọt.', price: '45.000 – 90.000đ', areas: ['Đống Đa', 'Cầu Giấy'], spots: ['Cheesecake Thái Hà'], tags: ['ngọt'] },
]

export const getRandomFood = (list) => {
  if (!list.length) return null
  return list[Math.floor(Math.random() * list.length)]
}

export const filterFoods = ({ category = 'all', area = 'all', search = '' } = {}) => {
  const q = search.trim().toLowerCase()
  return FOODS.filter((food) => {
    const matchCategory = category === 'all' || food.category === category
    const matchArea = area === 'all' || food.areas.includes(area)
    const matchSearch =
      !q ||
      food.name.toLowerCase().includes(q) ||
      food.desc.toLowerCase().includes(q) ||
      food.areas.some((a) => a.toLowerCase().includes(q)) ||
      food.tags.some((t) => t.toLowerCase().includes(q))
    return matchCategory && matchArea && matchSearch
  })
}

export default FOODS
