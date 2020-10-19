
var qiniu = require('qiniu')
var fs = require('fs')
var join = require('path').join
const { ACCESS_KEY, SECRET_KEY, BUCKET, DOMAIN } = require('./config')

// 需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = ACCESS_KEY
qiniu.conf.SECRET_KEY = SECRET_KEY
const bucket = BUCKET
const filePath = 'build'

const token = (bucket, key) => {
  const policy = new qiniu.rs.PutPolicy({ isPrefixalScope: 1, scope: bucket + ':' + key })
  return policy.uploadToken()
}

const config = new qiniu.conf.Config()

// 2-上传七牛云
const upload_file = (origin_key, file_path) => {
  // 七牛上传的token
  const key = origin_key.replace(/\\/g, '/')
  const up_token = token(bucket, key)
  const extra = new qiniu.form_up.PutExtra()
  const formUploader = new qiniu.form_up.FormUploader(config)
  // 上传文件
  formUploader.putFile(up_token, key, file_path, extra, (err, ret) => {
    if (!err) {
      // 上传成功， 处理返回值
      console.log(ret)
      console.log(DOMAIN + key)
    } else {
      // 上传失败， 处理返回代码
      console.error(err)
    }
  })
}

// 1-遍历文件夹
function getJsonFiles(jsonPath) {
  const jsonFiles = []
  function findJsonFile(path) {
    const files = fs.readdirSync(path)
    files.forEach(function(item, index) {
      const fPath = join(path, item)
      const stat = fs.statSync(fPath)
      if (stat.isDirectory() === true) {
        findJsonFile(fPath)
      }
      if (stat.isFile() === true) {
        jsonFiles.push(fPath)
      }
    })
  }
  findJsonFile(jsonPath)
  return jsonFiles
}

function main() {
  const files = getJsonFiles(filePath)
  for (const i in files) {
    const filename = files[i]
    const key = filename.replace(filePath, '').slice(1)
    if (!/.DS_Store/.test(key)) {
      upload_file(key, filename)
    }
  }
}

main()

// // test
// upload_file('robots.txt', './build/robots.txt')
// let files = getJsonFiles(filePath)
// console.log(files)
