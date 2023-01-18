window.addEventListener("load", function() {
  const userForm = document.getElementById("userInput");
  userForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const thing1 = document.getElementById('thing-1').value;
      const thing2 = document.getElementById('thing-2').value;
      const thing3 = document.getElementById('thing-3').value;

      const myArray = [thing1, thing2, thing3];

      const firstThing = myArray[0];
      const secondThing = myArray[1];
      const thirdThing = myArray[2];

      const newArray = [firstThing, secondThing, thirdThing];

      const newList = document.getElementById("userList");
      for (let input = 0; input <newArray.length; input++) {
        const listItem = document.createElement("li");
        listItem.textContent = newArray[input];
        newList.appendChild(listItem);
      }
  });
});