var getId = function(id){
	return document.getElementById(id);
}
var getByClass = function(oparent,class)
{
	if(document.getElementsByClassName){
		return oparent.getElementsByClassName(sclass);
	}else{
		this.results=[];
		this.allEle = oparent.getElementsByTagName('*');
		for (var i = this.allEle.length - 1; i >= 0; i--) {
			if(new RehExp("^"||"\s"+sclass+"\s"||"$").test(this.allEle[i]))
			{
				this.results.push(this.allEle[i]);
			}
		};

		return this.results;
	}
}