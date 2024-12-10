// .html() -> add content in html
// .css() -> add css code
// .addClass() -> add css class
// .removeClass() -> remove a css class
// .prop() -> change property data
// .data() -> get a data set attribute data
// .hide() -> hides element
// .animate() -> add the animation
// $.ajax() -> get server data / send a data a server
// .on() -> add a event
// .val() -> to get or to set a data of input

// [] ==> add => push(value)
// [] ==> create a new array from old one ==> map()
$(function () {
  let userList = [];
  // event
  $("#saveName").on("click", function () {
    let value = $("#inputText").val();
    if (value !== "") {
      userList.push(value);
      $("#inputText").val("");
      printData();
    }

    getData();
  });

  function printData() {
    let trs = userList.map(function (value, index) {
      return `<tr>
                  <td>${index + 1}</td>
                  <td>${value}</td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>`;
    });

    $("#userData").html(trs);
  }

  function getData() {
    let options = {
      url: "https://fakestoreapi.com/users",
      method: "GET",
    }; // js object => collection key value pair

    // HTTP -> GET , POST , PUT , DELETE , PATCH
    $.ajax(options)
      .done(function (data) {
        console.log(data);
      })
      .fail(function (error) {
        console.log(error);
      });
  }
});

// ajax => async javascript and XML ( without refreshing page )

// api => application programming interface

// language
// rest api -> representational state transfer api

// server (java)   => browser
// end point
