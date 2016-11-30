## Learning Objectives

* Use jQuery to change text and inline CSS of elements
* Use jQuery to respond to user interface actions

---

## We Do - Queryland

```javascript
$("h1").text("Oh Hello!");
```

---

## You Do - Prompt

Ask the user for a title for the page.

---

## We Do - Queryland

```javascript
$("input").val();
```

---

## We Do - Queryland

```javascript
$("button").on("click", function() {
  alert("THE BUTTON WAS CLICKED!");
})
```

---

## You Do - Put it together

Type something into the box, click the button, and the `h1` should then be replaced with what was typed.

---

## We Do - Queryland

```javascript
$("p").css("color", "red");
```

---

## You Do - Put it together

RGB Color Choice

### Bonus

Pick a random color
(research how to generate a random number)

---

## Lab

Temperature converter

### Bonus

Using a select tag, convert from *either* Celsius or Fahrenheit
