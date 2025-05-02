// Product data

  // Danh sách sản phẩm với category
  var products = [
    {id: 1, name: "Tuổi thơ dữ dội", author: "Phùng Quán", year: 1988, price: 50000, img: "sanpham/sp1.jpg", desc: "Một tác phẩm xúc động về thiếu niên Việt Nam trong kháng chiến chống Pháp. Nhân vật Lượm và các bạn nhỏ tham gia cách mạng với lòng dũng cảm, yêu nước mãnh liệt. Câu chuyện chân thật, cảm động và đậm chất nhân văn, làm rung động nhiều thế hệ độc giả.", category: "vanhoc"},
    {id: 2, name: "Số Đỏ", author: "Vũ Trọng Phụng", year: 1936, price: 45000, img: "sanpham/sp2.jpg", desc: "Tác phẩm trào phúng nổi tiếng, lột tả xã hội giả tạo, lố bịch thời Pháp thuộc qua nhân vật Xuân Tóc Đỏ. Văn phong châm biếm, hài hước nhưng thâm sâu, giúp người đọc suy ngẫm về đạo đức và lối sống thời hiện đại.", category: "vanhoc"},
    {id: 3, name: "Hoàng Tử Bé", author: "Antoine de Saint-Exupéry", year: 1943, price: 60000, img: "sanpham/sp3.jpg", desc: "Câu chuyện nhẹ nhàng nhưng sâu sắc về hành trình của một hoàng tử bé đến từ hành tinh khác. Mỗi nhân vật tượng trưng cho một kiểu người lớn, mang đến bài học về tình yêu, tình bạn và giá trị cuộc sống thật sự.", category: "thieunhi"},
    {id: 4, name: "Đồi Thỏ", author: "Richard Adams", year: 1972, price: 155000, img: "sanpham/sp4.jpg", desc: "Hành trình sinh tồn của một nhóm thỏ hoang trên đường tìm miền đất hứa. Truyện chứa đựng triết lý về xã hội, lãnh đạo và lòng trung thành, thích hợp cho cả thiếu nhi lẫn người lớn yêu văn học giả tưởng.", category: "thieunhi"},
    {id: 5, name: "Đàn ông sao Hỏa Đàn bà sao Kim", author: "John Gray", year: 1992, price: 140000, img: "sanpham/sp5.jpg", desc: "Sách kỹ năng nổi tiếng giúp bạn hiểu sự khác biệt cảm xúc giữa nam và nữ. Mang lại nhiều giải pháp thiết thực để duy trì mối quan hệ hài hòa và giao tiếp hiệu quả trong tình yêu và hôn nhân.", category: "kynang"},
    {id: 6, name: "Khéo ăn nói sẽ có được thiên hạ", author: "Trác Nhã", year: 2016, price: 73000, img: "sanpham/sp6.jpg", desc: "Cuốn sách truyền cảm hứng về sức mạnh của lời nói trong xây dựng mối quan hệ, công việc và cuộc sống. Cung cấp những tình huống thực tế giúp cải thiện kỹ năng giao tiếp hiệu quả nhất.", category: "kynang"},
    {id: 7, name: "Totto-chan: Cô bé bên cửa sổ", author: "Kuroyanagi Tetsuko", year: 1981, price: 152000, img: "sanpham/sp7.jpg", desc: "Tự truyện nổi tiếng kể về một cô bé học ở ngôi trường đặc biệt Tomoe Gakuen. Qua góc nhìn trẻ thơ, truyện ca ngợi giáo dục nhân văn, sáng tạo, và giá trị của sự thấu hiểu trong nuôi dạy trẻ.", category: "thieunhi"},
    {id: 8, name: "Tuổi trẻ đáng giá bao nhiêu", author: "Rosie Nguyễn", year: 2016, price: 85000, img: "sanpham/sp8.png", desc: "Cuốn sách giúp người trẻ khám phá bản thân, định hướng tương lai và sống hết mình với tuổi trẻ. Văn phong gần gũi, nhiều kinh nghiệm thực tế và truyền cảm hứng mạnh mẽ.", category: "kynang"},
    {id: 9, name: "Chiến tranh và hòa bình", author: "Lev Tolstoy", year: 1869, price: 115000, img: "sanpham/sp9.jpg", desc: "Tác phẩm kinh điển phản ánh cuộc sống nước Nga trong chiến tranh Napoleon. Lồng ghép giữa tình yêu, số phận và lịch sử, truyện khắc họa số phận con người giữa thời cuộc dữ dội.", category: "vanhoc"},
    {id: 10, name: "Đi tìm lẽ sống", author: "Viktor E. Frankl", year: 1946, price: 160000, img: "sanpham/sp10.jpg", desc: "Viết từ trải nghiệm trong trại tập trung phát xít, sách mang thông điệp sâu sắc về ý nghĩa sống. Khẳng định sức mạnh tinh thần giúp con người vượt qua hoàn cảnh khắc nghiệt nhất.", category: "tamly"},
    {id: 11, name: "Hai số phận", author: "Jeffrey Archer", year: 1979, price: 155000, img: "sanpham/sp11.jpg", desc: "Câu chuyện hấp dẫn về hai đứa trẻ sinh cùng ngày nhưng lớn lên trong hai thế giới đối lập. Cốt truyện gay cấn, cuốn hút và giàu tính nhân văn về sự lựa chọn và số phận.", category: "tieuthuyet"},
    {id: 12, name: "Những tấm lòng cao cả", author: "Edmondo De Amicis", year: 1886, price: 146000, img: "sanpham/sp12.webp", desc: "Tác phẩm kinh điển của Ý, được viết dưới dạng nhật ký của một cậu bé học sinh. Mỗi trang sách là một bài học cảm động về lòng nhân ái, sự hy sinh và tình yêu gia đình.", category: "thieunhi"},
    {id: 13, name: "Đắc nhân tâm", author: "Dale Carnegie", year: 1936, price: 70000, img: "sanpham/sp13.webp", desc: "Một trong những cuốn sách thành công nhất mọi thời đại về nghệ thuật giao tiếp và thuyết phục. Giúp bạn gây ảnh hưởng tích cực lên người khác và thành công trong sự nghiệp.", category: "tamly"},
    {id: 14, name: "Tư duy nhanh và chậm", author: "Daniel Kahneman", year: 2011, price: 152000, img: "sanpham/sp14.webp", desc: "Khám phá cơ chế hoạt động của não bộ qua hai hệ thống tư duy: nhanh (trực giác) và chậm (logic). Tác phẩm giúp bạn hiểu sâu hơn về hành vi, cảm xúc và ra quyết định hàng ngày.", category: "tamly"},
    {id: 15, name: "Cuốn theo chiều gió", author: "Margaret Mitchell", year: 1936, price: 230000, img: "sanpham/sp15.jpg", desc: "Bối cảnh nước Mỹ thời nội chiến, truyện xoay quanh tình yêu, danh vọng và sự kiên cường của Scarlett O'Hara. Văn chương lãng mạn, đầy cảm xúc và ám ảnh về chiến tranh.", category: "vanhoc"},
    {id: 16, name: "Trí tuệ của người Do Thái", author: "Ernest Abraham", year: 2001, price: 195000, img: "sanpham/sp16.webp", desc: "Khám phá nguyên lý sống, tư duy tài chính và giáo dục gia đình làm nên sự thành công của người Do Thái. Sách mang tính truyền cảm hứng cao, phù hợp cho mọi lứa tuổi.", category: "tamly"},
    {id: 17, name: "Nếp gấp thời gian", author: "Madeleine L’Engle", year: 1962, price: 180000, img: "sanpham/sp17.jpg", desc: "Một tác phẩm giả tưởng đặc sắc dành cho thiếu nhi, nói về khoa học, thời gian và lòng dũng cảm. Trẻ em sẽ học được nhiều bài học sâu sắc về bản thân qua chuyến phiêu lưu kỳ lạ.", category: "thieunhi"},
    {id: 18, name: "Charlie và nhà máy Sô-cô-la", author: "Roald Dahl", year: 1964, price: 165000, img: "sanpham/sp18.webp", desc: "Truyện thiếu nhi vui nhộn và giàu tưởng tượng. Charlie, một cậu bé nghèo, khám phá nhà máy sô-cô-la kỳ diệu cùng những bạn nhỏ khác và học được bài học về sự khiêm tốn.", category: "thieunhi"},
    {id: 19, name: "Đời ngắn đừng ngủ dài", author: "Robin Sharma", year: 2016, price: 1940000, img: "sanpham/sp19.jpg", desc: "Tập hợp những bài học truyền cảm hứng, giúp người đọc sống có mục tiêu, hành động hiệu quả và tạo ra cuộc đời ý nghĩa. Dành cho những ai đang trì hoãn và cần bứt phá bản thân.", category: "kynang"},
    {id: 20, name: "Đọc vị bất kỳ ai", author: "David J. Lieberman", year: 2007, price: 1270000, img: "sanpham/sp20.jpg", desc: "Cuốn sách hướng dẫn kỹ năng nhận biết suy nghĩ và ý định thật sự của người khác thông qua quan sát hành vi. Ứng dụng tốt trong đàm phán, giao tiếp, tuyển dụng và quản trị con người.", category: "tamly"}
  ];
  

  // Biến quản lý phân trang
  let currentPage = 1;
  const itemsPerPage = 10;
  let currentList = products;

  // Giỏ hàng
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');

  function updateCartCount() {
    let count = 0;
    cart.forEach(item => count += item.qty);
    const countElem = document.getElementById('cart-count');
    if (countElem) countElem.innerText = count;
  }

  function addToCartFromDataset(button) {
    const id = parseInt(button.dataset.id);
    const name = button.dataset.name;
    const price = parseInt(button.dataset.price);
    const img = button.dataset.img;

    const existing = cart.find(it => it.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({id, name, price, img, qty: 1});
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`Đã thêm "${name}" vào giỏ hàng.`);
  }

  function renderCartItems() {
    const cartContainer = document.getElementById('cart-items');
    if (!cartContainer) return;

    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Giỏ hàng của bạn đang trống.</p>";
    } else {
      let html = "<table><tr><th>Sản phẩm</th><th>Đơn giá</th><th>Số lượng</th><th>Thành tiền</th><th></th></tr>";
      let total = 0;

      cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        html += `
          <tr>
            <td><img src="${item.img}" class="cart-thumb"> ${item.name}</td>
            <td>${item.price.toLocaleString('vi-VN')} đ</td>
            <td>${item.qty}</td>
            <td>${itemTotal.toLocaleString('vi-VN')} đ</td>
            <td><button class="remove-item" data-id="${item.id}">Xóa</button></td>
          </tr>`;
      });

      html += `<tr><td colspan="3"><strong>Tổng cộng:</strong></td><td><strong>${total.toLocaleString('vi-VN')} đ</strong></td><td></td></tr>`;
      html += "</table>";
      cartContainer.innerHTML = html;

      document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = parseInt(btn.dataset.id);
          cart = cart.filter(it => it.id !== id);
          localStorage.setItem('cart', JSON.stringify(cart));
          updateCartCount();
          renderCartItems();
        });
      });
    }
  }

  function renderFilteredProducts(list, page = 1) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    currentList = list;
    currentPage = page;

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = list.slice(start, end);

    grid.innerHTML = "";
    paginatedItems.forEach(p => {
      grid.innerHTML += `
        <div class="product-card">
          <img src="${p.img}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p class="price">${p.price.toLocaleString('vi-VN')} đ</p>
          <a href="chitiet.html?id=${p.id}" class="detail-link">Xem chi tiết</a>
          <button class="add-to-cart" data-id="${p.id}" data-name="${p.name}" data-price="${p.price}" data-img="${p.img}">Thêm vào giỏ</button>
        </div>`;
    });

    attachAddToCartEvents();
    renderPagination(list.length, page);
  }

  function renderPagination(totalItems, currentPage) {
    const container = document.getElementById('pagination');
    if (!container) return;

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (totalPages <= 1) {
      container.innerHTML = "";
      return;
    }

    let html = '';
    for (let i = 1; i <= totalPages; i++) {
      html += `<button onclick="renderFilteredProducts(currentList, ${i})" class="${i === currentPage ? 'active-page' : ''}">${i}</button>`;
    }
    container.innerHTML = html;
  }

  function filterCategory(cat) {
    const filtered = (cat === 'all') ? products : products.filter(p => p.category === cat);
    renderFilteredProducts(filtered, 1);
  }

  function sortByPrice(type) {
  const sorted = [...currentList].sort((a, b) => {
    return type === 'asc' ? a.price - b.price : b.price - a.price;
  });
  renderFilteredProducts(sorted, 1);
  }


  function attachAddToCartEvents() {
    document.querySelectorAll('.add-to-cart').forEach(btn => {
      btn.addEventListener('click', () => addToCartFromDataset(btn));
    });
  }

  function renderProductDetail() {
    const detailContainer = document.querySelector('.product-detail');
    if (!detailContainer) return;

    const params = new URLSearchParams(window.location.search);
    const idParam = params.get('id');
    if (idParam) {
      const prod = products.find(p => p.id == parseInt(idParam));
      if (prod) {
        document.getElementById('detail-img').src = prod.img;
        document.getElementById('detail-img').alt = prod.name;
        document.getElementById('detail-title').innerText = prod.name;
        document.getElementById('detail-author').innerText = "Tác giả: " + prod.author;
        document.getElementById('detail-year').innerText = "Năm xuất bản: " + prod.year;
        document.getElementById('detail-price').innerText = prod.price.toLocaleString('vi-VN') + " đ";
        document.getElementById('detail-desc').innerText = prod.desc;

        const btn = document.getElementById('add-to-cart-btn');
        btn.setAttribute('data-id', prod.id);
        btn.setAttribute('data-name', prod.name);
        btn.setAttribute('data-price', prod.price);
        btn.setAttribute('data-img', prod.img);
        btn.addEventListener('click', () => addToCartFromDataset(btn));
      }
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateCartCount();
    renderProductDetail();
    renderCartItems();

    if (document.getElementById('product-grid')) {
      renderFilteredProducts(products);
    }
  });
