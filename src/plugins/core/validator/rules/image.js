export default function image(files) {
  return files.every(file =>
    /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(file.name)
  )
}
