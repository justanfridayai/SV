(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const chatCircle = document.getElementById("chatCircle");
    const chatBox = document.getElementById("chatBox");
    const closeChat = document.getElementById("closeChat");
    const optAppointment = document.getElementById("optAppointment");
    const optLocation = document.getElementById("optLocation");
    const optCall = document.getElementById("optCall");

    if (!chatCircle || !chatBox) return; // stops if not found

    function toggleChatBox() {
      chatBox.classList.toggle("open");
      chatBox.setAttribute("aria-hidden", !chatBox.classList.contains("open"));
    }

    // toggle chat
    chatCircle.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleChatBox();
    });

    // close chat
    closeChat.addEventListener("click", function (e) {
      e.stopPropagation();
      chatBox.classList.remove("open");
    });

    // options
    optAppointment.addEventListener("click", function () {
      window.open("https://youtube.com", "_blank");
      chatBox.classList.remove("open");
    });

    optLocation.addEventListener("click", function () {
      window.open("https://maps.app.goo.gl/BSfVJQd2zGfr1JpY9?g_st=aw", "_blank");
      chatBox.classList.remove("open");
    });

    optCall.addEventListener("click", function () {
      window.location.href = "tel:+919994586009";
      chatBox.classList.remove("open");
    });

    // click outside to close
    document.addEventListener("click", function (e) {
      if (!chatBox.classList.contains("open")) return;
      if (!chatBox.contains(e.target) && !chatCircle.contains(e.target)) {
        chatBox.classList.remove("open");
      }
    });
  });
})();
