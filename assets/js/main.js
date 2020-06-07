let vm = new Vue({
	el: '#all',
	data: {
		columnHead: [{
			text: '',
			delete: false,
		}, {
			text: '',
			delete: true,
		}],
		row: [
			[{
				text0: '',
				delete: false,
				head: true,
				data: false,
			}, {
				text0: '',
				head: false,
				data: true,
			}, {
				text0: '',
				head: false,
				data: true,
			}],[{
				text0: '',
				delete: true,
				head: true,
				data: false,
			}, {
				text1: '',
				head: false,
				data: true,
			}, {
				text1: '',
				head: false,
				data: true,
			}]
		],
	},
	methods: {
		addColumn: function () {
			let col = { text: '', delete: true }
			this.columnHead.push(col);
			for (let i = 0; i < this.row.length; i++) {
				let data = { text: '', head: false, data: true}
				this.row[i].push(data);
			}
		},
		deleteColumn: function (index) {
			this.columnHead.splice(index, 1);
			for (let i = 0; i < this.row.length; i++) {
				this.row[i].splice(index + 1, 1);
			}
		},
		addRow: function(){
			let row = [{ text: '',delete: true, head: true, data: false }]
			for (let i = 0; i < this.row[0].length - 1; i++) {
				let data = { text: '', head: false, data: true }
				row.push(data);
			}
			this.row.push(row);
		},
		deleteRow: function (index) {
			this.row.splice(index, 1);
		}
	}
});
