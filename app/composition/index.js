// scan folder


class Folder {
	constructor(name) {
		this.name = name		
		this.parent = null
		this.childrens = new Set()
	}
	add(children) {
		children.parent = this
		this.childrens.add(children)
	}
	scan() {
		console.log(`扫描到文件夹：${this.name}`)
		this.childrens.forEach( item => item.scan() )
	}
	remove() {
		if (!this.parent) {
			return
		}
		this.parent.childrens.delete(this)
	}
}

class File {
	constructor(name) {
		this.name = name		
		this.parent = null
	}
	scan() {
		console.log(`扫描到文件：${this.name}`)
	}
	remove() {
		if (!this.parent) {
			return
		}
		this.parent.childrens.delete(this)
	}
}


// create folders and files
const rootFolder = new Folder('root')
const folder1 = new Folder('folder1')
const folder2 = new Folder('folder2')

const file1 = new File('file1')
const file2 = new File('file2')
const file3 = new File('file3')
const file4 = new File('file4')
const file5 = new File('file5')

// place folders into root folder
rootFolder.add(folder1)
rootFolder.add(folder2)

// place files into folders
folder1.add(file1)
folder1.add(file2)
folder2.add(file3)
folder2.add(file4)
folder2.add(file5)

// remove file5
file5.remove()

// scan root folder
rootFolder.scan()	