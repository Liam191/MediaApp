//round variable to hold amount to call projects with
var round = 0;

//variable to keep track of how many projects there aren
var amount = 16;
var paginationHandler = function(){
    // store pagination container so we only select it once
    var $paginationContainer = $(".pagination-container"),
        $pagination = $paginationContainer.find('.pagination ul');
    // click event
    $pagination.find("li a").on('click.pageChange',function(e){
        e.preventDefault();
        // get parent li's data-page attribute and current page
    var parentLiPage = $(this).parent('li').data("page"),
    currentPage = parseInt( $(".pagination-container div[data-page]:visible").data('page') ),
    numPages = $paginationContainer.find("div[data-page]").length;
    // make sure they aren't clicking the current page
    if ( parseInt(parentLiPage) !== parseInt(currentPage) ) {
    // hide the current page
    $paginationContainer.find("div[data-page]:visible").hide();
    if ( parentLiPage === '+' ) {
                // next page
				round += 8;
        $paginationContainer.find("div[data-page="+( currentPage+1>numPages ? numPages : currentPage+1 )+"]").show();
    } else if ( parentLiPage === '-' ) {
                // previous page
				if(round != 0)
					round -= 8;
				
        $paginationContainer.find("div[data-page="+( currentPage-1<1 ? 1 : currentPage-1 )+"]").show();
    } else {
        // specific page
				round = (parseInt(parentLiPage) * 8);
        $paginationContainer.find("div[data-page="+parseInt(parentLiPage)+"]").show();
            }
        }
    });
};
$( document ).ready( paginationHandler );

//call a function to add/subtract to a variable in the button presses above
//use variable to select the next 8 projects
//store all projects somewhere on their own
//store projects currently chosen by variable in array?
////find the right id, then create for loop to fill 8 spaces with the following 8 projects
/*
array currentEight[7];
for(x=0; x< 8: x++)
{
	for(y = 0001; y < amount; y++)
	{
		if(id == (round +1))
		{
			array[x] = PROJECTINFORMATION;
			round++;
		}
		break;//break out of the inner for loop only
	}
}
*/
//change below to just one element id
//load new data array into it
//document.getElementById("room1").innerHTML = array;
document.getElementById("room1").innerHTML = '<div class="row">'+
					'<div id = 0001 class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project One</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div id = 0002 class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project Two</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div id = 0003 class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project Three</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div id = 0004 class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project Four</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div id = 0005 class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project Five</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div id = 0006 class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project Six</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div id = 0007 class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project Seven</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div id = 0008 class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project Eight</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>';
document.getElementById("room2").innerHTML = '<div class="row">'+
					'<div id = 0009 class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project Nine</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div id = 00010 class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project Ten</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div id = 00011 class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project Eleven</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div id = 00012 class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project Twelve</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div id = 00013 class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project Thirteen</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div id = 0014 class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project Fourteen</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div id = 00015 class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project Fifteen</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div id = 0016 class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project Sixteen</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>';
