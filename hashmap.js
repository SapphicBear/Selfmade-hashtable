export class HashMap {
    
    loadFactor = 0.75; // lamda = number of entries / total size of array;
    capacity = 16;

    constructor(capactiy) {
        this.bs = new Array(this.capacity);
        this.count = 0;
    }
    hash(key) {
        let hashCode = 0;

        const primeNum = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNum * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    }
    bucket(key) {
        let h = this.hash(key);
        return h;
    }

    resize() {
        this.count = 0;
        this.capacity *= 2;
        let newMap = new Array(this.capacity);
        for (let i = 0; i < this.bs.length; i++) {
            if (this.bs[i] !== undefined) {
                let key = this.bs[i].key;
                let value = this.bs[i].value;
                let b = this.bucket(this.bs[i].key);
                newMap[b] = { key, value };
            }
        }
        this.bs = new Array(this.capacity);
        newMap.forEach((el) => {
        this.bs.push(el);
        this.count++;
        })
    }

    set(key, value) {
        if (typeof key !== "string") {
            throw new Error("Not a string!");
        }
        if (this.count / this.capacity > this.loadFactor) {
            this.resize();
        }
        let b = this.bucket(key);
        if (this.bs[b]) {
            this.bs[b].value = value;
        } else {
            this.bs[b] = { key, value };
            this.count++;
        }
    }
   
    has(key) {
        let isThere = 0;
        this.bs.forEach((item) => {
            if (item.key == key) {
                isThere++;
            }
        })
        if (isThere == 0) {
            return false;
        } else {
            return true;
        }
    }

    remove(key) {
        let i = 0;
        for (i; i < this.bs.length; i++) {
            if (this.bs[i] == undefined || this.bs[i].key !== key) {
                continue;
            } else {
                if (this.bs[i].key == key) {
                    this.bs[i] = undefined;
                    this.count--;
                    return true;
                }
            }
        }
        return false;
    }

    length() {
        return this.count;
    }

    clear() {
        for (let i = 0; i < this.bs.length; i++) {
            this.bs[i] = undefined;
        }
        this.count = 0;
        return true;
    }

    keys() {
        let keys = [];
        for (let i = 0; i < this.bs.length; i++) {
            if (this.bs[i] == undefined || this.bs[i].key == undefined) {
                continue;
            } else {
                keys.push(this.bs[i].key);
            }
        }
        return keys;
    }

    values() {
        let values = [];
        for (let i = 0; i < this.bs.length; i++) {
            if (this.bs[i] == undefined || this.bs[i].value == undefined) {
                continue;
            } else {
                values.push(this.bs[i].value);
            }
        }
        return values;

    }

    entries() {
        let entries = []
        for (let i = 0; i < this.bs.length; i++) {
            if (this.bs[i] == undefined) {
                continue;
            } else {
                let key = this.bs[i].key;
                let value = this.bs[i].value;
                entries.push([ key, value ]);
            }
        }
        return entries;
    }

    get(key) {
        for (let i = 0; i < this.bs.length; i++) {
            if (this.bs[i] == undefined) {
                continue;
            } else {
                if (this.bs[i].key == key) {
                    return this.bs[i].value;
                }
            }
        }
        return null;
    }
}



