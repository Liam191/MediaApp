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
        $paginationContainer.find("div[data-page="+( currentPage+1>numPages ? numPages : currentPage+1 )+"]").show();
    } else if ( parentLiPage === '-' ) {
                // previous page
        $paginationContainer.find("div[data-page="+( currentPage-1<1 ? 1 : currentPage-1 )+"]").show();
    } else {
        // specific page
        $paginationContainer.find("div[data-page="+parseInt(parentLiPage)+"]").show();
            }
        }
    });
};
$( document ).ready( paginationHandler );

document.getElementById("room1").innerHTML = '<div class="row">'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
document.getElementById("room3").innerHTML = '<div class="row">'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project Seventeen</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project Eighteen</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project Nineteen</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project Twenty</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project Twenty One</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project Twenty Two</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project Twenty Three</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project Twenty Four</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>';
document.getElementById("room4").innerHTML = '<div class="row">'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 25</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 26</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 27</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 28</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 29</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 30</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 31</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 32</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>';
document.getElementById("room5").innerHTML = '<div class="row">'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 33</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 34</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 35</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 36</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 37</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 38</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 39</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 40</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>';
document.getElementById("room6").innerHTML = '<div class="row">'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 41</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 42</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 43</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 44</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 45</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 46</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 47</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 48</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>';
document.getElementById("room7").innerHTML = '<div class="row">'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 49</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 50</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 51</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 52</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 53</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 54</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 55</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 56</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>';
document.getElementById("room8").innerHTML = '<div class="row">'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 57</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 58</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 59</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 60</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 61</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 62</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 63</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 64</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>';
document.getElementById("room9").innerHTML = '<div class="row">'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 65</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 66</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 67</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 68</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 69</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 70</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 71</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 72</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>';
document.getElementById("room10").innerHTML = '<div class="row">'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 73</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 74</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 75</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 76</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 77</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 78</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 79</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
						'<div class="card h-100">'+
							'<a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
							'<div class="card-body">'+
								'<h4 class="card-title">'+
									'<a href="#">Project 80</a>'+
								'</h4>'+
								'<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>';
document.getElementById("room11").innerHTML = '<div class="row">'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
document.getElementById("room12").innerHTML = '<div class="row">'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
document.getElementById("room13").innerHTML = '<div class="row">'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
document.getElementById("room14").innerHTML = '<div class="row">'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
document.getElementById("room15").innerHTML = '<div class="row">'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
document.getElementById("room16").innerHTML = '<div class="row">'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
document.getElementById("room17").innerHTML = '<div class="row">'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
document.getElementById("room18").innerHTML = '<div class="row">'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
document.getElementById("room19").innerHTML = '<div class="row">'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
document.getElementById("room20").innerHTML = '<div class="row">'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
document.getElementById("room21").innerHTML = '<div class="row">'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
document.getElementById("room22").innerHTML = '<div class="row">'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
document.getElementById("room23").innerHTML = '<div class="row">'+
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
					'<div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">'+
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
