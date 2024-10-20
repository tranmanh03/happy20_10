window.onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);

    const message = "Chúc vợ yêu 20/10 vui vẻ\nAnh yêu em <3"; // Chuỗi thông điệp
    const messageContainer = document.getElementsByClassName("p")[0]; // Lấy phần tử đầu tiên
    console.log(messageContainer);

    let currentCharIndex = 0; // Bắt đầu từ ký tự đầu tiên

    function typeMessage() {
        if (currentCharIndex < message.length) {
            // Hiển thị từng ký tự một
            // Nếu ký tự hiện tại là '\n', thêm thẻ <br> để xuống dòng
            if (message.charAt(currentCharIndex) === "\n") {
                messageContainer.innerHTML += "<br>"; // Thêm thẻ <br> thay vì khoảng trắng
            } else {
                messageContainer.innerHTML += message.charAt(currentCharIndex);
            }
            currentCharIndex++;

            // Tiếp tục hiển thị các ký tự sau mỗi 300ms
            setTimeout(typeMessage, 300);
        }
    }

    typeMessage(); // Gọi hàm để bắt đầu gõ thông điệp
};
