import SearchModel from '../../1-vanilla/js/models/SearchModel.js'
import KeywordModel from '../../1-vanilla/js/models/KeywordModel.js'
import HistoryModel from '../../1-vanilla/js/models/HistoryModel.js'

new Vue({
    el: '#app',
    data: {
        query: '',
        submitted: false,
        tabs: ['추천 검색어', '최근 검색어'],
        selectedTab: '',
        keywords: [],
        history: [],
        searchResult: [],
    },
    created() {
        this.selectedTab = this.tabs[0]
        this.fetchKeyword()
        this.fetchHistory()
    },
    methods: {
        onSubmit(e) {
            this.search()
        },
        onKeyup(e) {
            if(!this.query.length) this.resetForm()
        },
        onReset(e) {
            this.resetForm()
        },
        onClickTab(tab) {
            this.selectedTab = tab
        },
        onClickKeyword(keyword) {
            this.query = keyword
            this.search()
        },
        fetchKeyword() {
          KeywordModel.list().then(data => {
              this.keywords = data
          })  
        },
        onClickRemoveHistory(keyword) {
            HistoryModel.remove(keyword)
            this.fetchHistory()
        },
        fetchHistory() {
            HistoryModel.list().then(data => {
                this.history = data
            })
        },
        search() {
            SearchModel.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })
            HistoryModel.add(this.query)
            this.fetchHistory()
        },
        resetForm() {
            this.query = ''
            this.submitted = false
            this.searchResult = []
        }
    }
})