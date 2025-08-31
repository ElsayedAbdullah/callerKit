// Copy button
const copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener("click", function () {
  let input = document.getElementById("myInput");
  input.select();
  input.setSelectionRange(0, 99999); // For mobile
  navigator.clipboard.writeText(input.value).then(() => {
    // Show Toast
    copyBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Copied</span>
          `;

    copyBtn.classList.add("copied");
  });

  setTimeout(() => {
    copyBtn.innerHTML = `
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M4 14C3.06812 14 2.60218 14 2.23463 13.8478C1.74458 13.6448 1.35523 13.2554 1.15224 12.7654C1 12.3978 1 11.9319 1 11V4.2C1 3.0799 1 2.51984 1.21799 2.09202C1.40973 1.71569 1.71569 1.40973 2.09202 1.21799C2.51984 1 3.0799 1 4.2 1H11C11.9319 1 12.3978 1 12.7654 1.15224C13.2554 1.35523 13.6448 1.74458 13.8478 2.23463C14 2.60218 14 3.06812 14 4M11.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.71569 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H11.2C10.0799 8 9.51984 8 9.09202 8.21799C8.71569 8.40973 8.40973 8.71569 8.21799 9.09202C8 9.51984 8 10.0799 8 11.2V17.8C8 18.9201 8 19.4802 8.21799 19.908C8.40973 20.2843 8.71569 20.5903 9.09202 20.782C9.51984 21 10.0799 21 11.2 21Z"
              stroke="white"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Copy API Key</span>
          `;

    copyBtn.classList.remove("copied");
  }, 2000);
});

// Show/Hide button
document.getElementById("toggleBtn").addEventListener("click", function () {
  let input = document.getElementById("myInput");
  if (input.type === "password") {
    input.type = "text";
    this.innerHTML = `
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                stroke="#414651"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                stroke="#414651"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="d-none d-lg-inline-block">Hide API Key</span>
            `;
  } else {
    input.type = "password";
    this.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
              <path d="M9.74294 3.09232C10.1494 3.03223 10.5686 3 11.0004 3C16.1054 3 19.4553 7.50484 20.5807 9.28682C20.7169 9.5025 20.785 9.61034 20.8231 9.77667C20.8518 9.90159 20.8517 10.0987 20.8231 10.2236C20.7849 10.3899 20.7164 10.4985 20.5792 10.7156C20.2793 11.1901 19.8222 11.8571 19.2165 12.5805M5.72432 4.71504C3.56225 6.1817 2.09445 8.21938 1.42111 9.28528C1.28428 9.50187 1.21587 9.61016 1.17774 9.77648C1.1491 9.9014 1.14909 10.0984 1.17771 10.2234C1.21583 10.3897 1.28393 10.4975 1.42013 10.7132C2.54554 12.4952 5.89541 17 11.0004 17C13.0588 17 14.8319 16.2676 16.2888 15.2766M2.00042 1L20.0004 19M8.8791 7.87868C8.3362 8.42157 8.00042 9.17157 8.00042 10C8.00042 11.6569 9.34356 13 11.0004 13C11.8288 13 12.5788 12.6642 13.1217 12.1213" stroke="#414651" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="d-none d-lg-inline-block">Show API Key</span>
            `;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // check if modal was already shown
  if (!localStorage.getItem("modalShown")) {
    var myModal = new bootstrap.Modal(document.getElementById("cookiesModal"));
    myModal.show();

    // mark as shown
    localStorage.setItem("modalShown", "true");
  }
});
