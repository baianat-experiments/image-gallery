# Muse

ES6 images gallery

## key features

[examples](https://baianat.github.io/imgrid/)

## Using

### include necessary files

``` html
<head>
  <link rel="stylesheet" href="dist/css/muse.css">
</head>
<body>
    ...
    <script type="text/javascript" src="dist/js/muse.js"></script>
    <!-- if you use @baianat/flux carousal -->
    <!-- you can incluse just muse-core -->
    <script type="text/javascript" src="dist/js/flux.js"></script>
    <script type="text/javascript" src="dist/js/muse-core.js"></script>
</body>
```

### HTML markup

``` html
<div id="myGallery" class="Muse">

  <!-- add images and it's thumbnails -->
  <a href="img/image-1.jpg">
    <img src="img/thumb-1.jpg" alt="Awesome image">
  </a>
  <a href="img/image-2.jpg">
    <img src="img/thumb-2.jpg" alt="Awesome image">
  </a>
  <a href="img/image-3.jpg">
    <img src="img/thumb-3.jpg" alt="Awesome image">
  </a>
  ...

</div>

<script>
  // create the gallery
  cosnt newMuse = new Muse('#myGallery', [setting]);
</script>
```

### Settings

| Properties  | default  | values |
| :---------: | :------: | :----: |

### Methods

Methods are called on Muse instances

```javascript
  cosnt newMuse = new Muse('#myGallery');
  newMuse.showGallery();
```

| Method       | Argument | Description                  |
| :----------: | -------- | ---------------------------- |
| `showGalley` |          | show muse gallery            |
| `hideGalley` |          | hide muse gallery            |