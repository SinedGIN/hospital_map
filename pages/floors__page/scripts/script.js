

// Функция для обработки ошибок при получении местоположения


// Функция для изменения этажа
function changeFloor(floorNumber) {
  // Скрываем все изображения этажей
    const Imagefloor = [
        "./images/floors_images/hospital_map_floor1.png",
        "./images/floors_images/hospital_map_floor2.png",
        "./images/floors_images/hospital_map_floor3.png",
        "./images/floors_images/hospital_map_floor4.png",
        "./images/floors_images/hospital_map_floor5.png",
        "./images/floors_images/hospital_map_floor6.png",
        "./images/floors_images/hospital_map_floor7.png"
    ]


  for (var i = 1; i <= 7; i++) {
    var floorImage = document.getElementById('map-image-' + i);
    floorImage.src = Imagefloor[i - 1]
    
  }

  for (var i = 1; i <= 7; i++) {
    var floorImage = document.getElementById('map-image-' + i);
    if (floorNumber != i){
      floorImage.style.display = 'none';
    }
  }

  // Показываем изображение выбранного этажа
  var selectedFloorImage = document.getElementById('map-image-' + floorNumber);
  if (selectedFloorImage) {
    selectedFloorImage.style.display = 'block';
  }

  // Удаляем класс "active" у всех кнопок этажей
  var floorButtons = document.querySelectorAll('#floor-buttons button');
  floorButtons.forEach(function(button) {
    button.classList.remove('active');
  });

  // Добавляем класс "active" к нажатой кнопке этажа
  var selectedButton = document.getElementById('floor' + floorNumber + 'Button');
  if (selectedButton) {
    selectedButton.classList.add('active');
  }
}
