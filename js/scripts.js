window.addEventListener("load", function() {
  const userForm = document.getElementById("userInput");
  userForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const thing1 = document.getElementById('thing-1').value;

      const myArray = [thing1];

      const firstThing = myArray[0];

      const newArray = [firstThing];

      const newList = document.getElementById("userList");
      for (let input = 0; input <newArray.length; input++) {
        const listItem = document.createElement("li");
        listItem.textContent = newArray[input];
        newList.appendChild(listItem);
      }
  });
});