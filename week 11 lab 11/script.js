const itemInput = document.getElementById("item-input");
const addButton = document.getElementById("add-button");
const itemsList = document.getElementById("items-list");

addButton.addEventListener("click", addItem);

function addItem() {
  const itemName = itemInput.value.trim();
  if (itemName !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      ${itemName}
      <button class="delete-button">Delete</button>
    `;
    itemsList.appendChild(li);
    itemInput.value = "";
    itemInput.focus();

    const deleteButton = li.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
      itemsList.removeChild(li);
    });
  }
}
