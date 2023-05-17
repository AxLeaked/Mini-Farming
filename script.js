let cropStatus = "uncultivated";
let coins = 0;

function waterCrop() {
  if (cropStatus === "uncultivated") {
    cropStatus = "growing";
    alert("You watered the crop. It will take some time to grow!");
    document.getElementById("crop").src = "https://santana.neocities.org/admin/farming/crop-growing.png";
    setTimeout(function() {
      finishGrowing();
    }, 5000); // Crop takes 5 seconds to grow
  } else if (cropStatus === "growing") {
    alert("You already watered the crop. It's growing nicely!");
  } else {
    alert("You can't water the crop anymore. It's ready to be harvested!");
  }
}

function finishGrowing() {
  if (cropStatus === "growing") {
    cropStatus = "mature";
    alert("The crop has finished growing!");
    document.getElementById("crop").src = "https://santana.neocities.org/admin/farming/crop-mature.png";
  }
}
function harvestCrop() {
  if (cropStatus === "uncultivated") {
    alert("You need to water and cultivate the crop first!");
  } else if (cropStatus === "growing") {
    alert("The crop is still growing. Be patient!");
  } else {
    cropStatus = "uncultivated";
    coins += 5; // Each harvested crop gives 5 coins
    alert("You harvested the crop. Time to plant a new one!");
    document.getElementById("crop").src = "crop.png";
    updateBalance();
  }
}

function sellCrop() {
  if (cropStatus === "uncultivated") {
    alert("You don't have anything to sell yet!");
  } else if (cropStatus === "growing") {
    alert("The crop is not ready to be sold yet!");
  } else {
    coins += 10; // Selling a crop gives 10 coins
    alert("You sold the crop and earned 10 coins!");
    plantNewCrop();
    updateBalance();
  }
}

function plantNewCrop() {
  cropStatus = "uncultivated";
  document.getElementById("crop").src = "crop.png";
}

function updateBalance() {
  document.getElementById("coinCount").textContent = coins;
}
