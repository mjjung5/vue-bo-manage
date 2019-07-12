<template>
  <v-flex>
    <v-flex sm6 offset-sm3>
      <v-flex xs12 sm12 md8 align-center>
        <v-text-field
          label="search"
          placeholder="Search Data..."
          v-model="search"
          @keyup.enter="findContact"
        ></v-text-field>
      </v-flex>
      <v-list two-line
        v-for="(item, index) in calData"
        :key="index">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title class="text--primary">
              {{ item.name }}
            </v-list-tile-title>
            <v-list-tile-sub-title>
              {{ item.tel }}
            </v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon ripple @click="onEdit(item)">fas fa-edit</v-icon>
            <v-icon ripple @click="onRemove(item)">delete</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider></v-divider>
      </v-list>
      <br/>
      <div class="text-xs-center">
        <v-pagination
          v-model="curPageNum"
          :length="numOfPages"
        ></v-pagination>
      </div>
    </v-flex>
    <!-- newDialog-->
    <v-dialog v-model="newDialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
      <v-btn
      fixed
      dark
      fab
      bottom
      right
      color="pink"
      @click="onAdd"
    >
     <v-icon dark v-on="on">add</v-icon>
     </v-btn>
     </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add Contact</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  v-model="newData.name"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="tel*"
                v-model="newData.tel"
                required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="['서울시', '인천광역시', '세종시', '부산광역시']"
                  label="address*"
                  required
                  v-model="newData.address"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="closeDialog">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="submitData">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- editDialog-->
    <v-dialog v-model="editDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Edit Contact</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                  v-model="selectedData.name"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="tel*"
                v-model="selectedData.tel"
                required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="['서울시', '인천광역시', '세종시', '부산광역시']"
                  label="address*"
                  required
                  v-model="selectedData.address"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="closeDialog">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="editData">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-flex>
</template>

<script>
export default {
  name: 'contact-list',
  data () {
    return {
      searchContact: '',
      // searchData: [],
      listData: [],
      dataPerPage: 10, // 한 page 당 보여지는 list 갯수
      curPageNum: 1, // default page
      newDialog: false,
      editDialog: false,
      curSelectIndex: 0,
      beforeEditCache: '',
      newData: {
        address: '',
        name: '',
        tel: ''
      },
      selectedData: {
        address: '',
        name: '',
        tel: ''
      },
      search: ''
      // keyData: {
      //   address: this.selectedData.address,
      //   name: this.selectedData.name,
      //   tel: this.selectedData.tel,
      //   no: this.selectedData.no
      // }
    }
  },
  created () {
    this.$axios('/api/contacts')
      .then((res) => {
        this.listData = res.data.contacts
        console.log(this.listData)
      })
  },
  methods: {
    findContact (searchItem) {
      const keyData = {
        name: this.search
      }
      console.log(this.search)

      this.$axios.get('/api/contacts/search/' + keyData.name, keyData)
        .then((res) => {
          this.$axios.get('/api/contacts')
            .then((res) => {
              this.searchData = res.data.contacts
              console.log('search finish')
            })
        })
    },
    closeDialog () {
      console.log('push button')
      this.newDialog = false
      this.editDialog = false
      this.newData = ''
    },
    // addContact (submitData) {
    //   if (this.newData.trim().length === 0) {
    //     return
    //   }
    //   this.listData.push(submitData)
    //   // this.curPageNum = this.numOfPages

    //   this.closeDialog()
    // },
    submitData () {
      this.newDialog = false
      this.$axios.post('/api/contacts', {
        name: this.newData.name,
        address: this.newData.address,
        tel: this.newData.tel
      })
        .then((res) => {
          console.log('post')
          this.$axios.get('/api/contacts')
            .then((res) => {
              this.listData = res.data.contacts
              console.log('finish')
            })
        })

      // this.addContact(submitData)
      this.closeDialog()
    },

    editContact () {
      // this.listData.push(editData)
      this.curPageNum = this.numOfPages
    },
    editData () {
      this.editDialog = false
      const editData = {
        address: this.selectedData.address,
        name: this.selectedData.name,
        tel: this.selectedData.tel,
        no: this.selectedData.no
      }

      this.$axios.put('/api/contacts/' + editData.no, editData)
        .then((res) => {
          if (res.data.status === 'success') {
            console.log('put')
            this.selectedData.name = ''
            this.selectedData.address = ''
            this.selectedData.tel = ''
            this.$axios.get('/api/contacts')
              .then((res) => {
                this.listData = res.data.contacts
                console.log('reload')
              })
          } else {
            console.log('error')
          }
        })
      this.listData.splice(this.curSelectIndex, 1, editData)
      this.closeDialog()
    },

    onAdd () {
      this.newDialog = true
    },
    onEdit (test) {
      this.editDialog = true

      this.selectedData.name = test.name
      this.selectedData.address = test.address
      this.selectedData.tel = test.tel
      this.selectedData.no = test.no
    },
    onRemove (delItem) {
      const delData = {
        address: this.selectedData.address = delItem.name,
        name: this.selectedData.name = delItem.name,
        tel: this.selectedData.tel = delItem.tel,
        no: this.selectedData.no = delItem.no
      }

      console.log(delData)

      this.$axios.delete('/api/contacts/' + delData.no, delData)
        .then((res) => {
          this.$axios.get('/api/contacts')
            .then((res) => {
              this.listData = res.data.contacts
              console.log('del finish')
            })
        })
      this.listData.splice(this.delData, 1)
    }

  },

  computed: {
    startPagenated () {
      // page당 보여질 data갯수
      return ((this.curPageNum - 1) * this.dataPerPage)
    },
    endPagenated () {
      return (this.startPagenated + this.dataPerPage)
    },
    numOfPages () {
      // 전체 페이지 length 구하기
      return Math.floor(this.listData.length / this.dataPerPage)
    },
    calData () {
      // return this.listData.filter((item) => {
      //   return item.name.toLowerCase().includes(this.search.toLowerCase())
      // })

      return this.listData.slice(this.startPagenated, this.endPagenated)
    },
    filteredList () {
      return this.listData.filter((item) => {
        return item.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }

}
</script>

<style lang="scss">

  .search-input{
    width: 100%;
    padding: 10px 18px;
    font-size: 18px;
    margin-bottom: 16px;
  }

  a:focus{
    outline: 0;
  }

</style>
