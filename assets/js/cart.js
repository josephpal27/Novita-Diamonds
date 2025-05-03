// Functionality for Quantity Update and Delete in Cart Page
document.addEventListener("DOMContentLoaded", function () {
  const cartItems = document.querySelectorAll(".cart-product");

  cartItems.forEach((item) => {
    const minusBtn = item.querySelector(".minus");
    const plusBtn = item.querySelector(".plus");
    const qtyInput = item.querySelector(".qty-input");
    const deleteBtn = item.querySelector(".delete-btn");
    const totalBox = item.querySelector(".total-box p");
    const productId = item.querySelector(".quantity-box").dataset.id;
    const unitPrice = parseFloat(item.dataset.price); // from data-price attribute

    function updateTotal(qty) {
      const total = unitPrice * qty;
      totalBox.textContent = `Rs. ${total.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
      })}`;
    }

    plusBtn.addEventListener("click", function () {
      let currentQty = parseInt(qtyInput.value);
      if (currentQty < 10) {
        currentQty += 1;
        qtyInput.value = currentQty;
        updateQuantity(productId, currentQty);
        updateTotal(currentQty);
        updateEstimatedTotal(); // Update overall total
      }
    });

    minusBtn.addEventListener("click", function () {
      let currentQty = parseInt(qtyInput.value);
      if (currentQty > 1) {
        currentQty -= 1;
        qtyInput.value = currentQty;
        updateQuantity(productId, currentQty);
        updateTotal(currentQty);
        updateEstimatedTotal(); // Update overall total
      }
    });

    deleteBtn.addEventListener("click", function () {
      item.remove();
      deleteProduct(productId);
      updateEstimatedTotal(); // Update overall total
    });

    // Initialize product total on load
    updateTotal(parseInt(qtyInput.value));
  });

  // Update total on page load
  updateEstimatedTotal();

  function updateQuantity(productId, quantity) {
    fetch("update_cart.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, quantity }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Quantity updated", data))
      .catch((err) => console.error("Update error", err));
  }

  function deleteProduct(productId) {
    fetch("delete_from_cart.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Product deleted", data))
      .catch((err) => console.error("Delete error", err));
  }

  function updateEstimatedTotal() {
    const totalElement = document.getElementById("estimated-total");
    let totalAmount = 0;

    document.querySelectorAll(".cart-product").forEach((item) => {
      const qty = parseInt(item.querySelector(".qty-input").value);
      const unitPrice = parseFloat(item.dataset.price);
      totalAmount += qty * unitPrice;
    });

    totalElement.textContent = totalAmount.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
    });
  }
});

// -----------------------------------------------------------------------------------------------------------------
