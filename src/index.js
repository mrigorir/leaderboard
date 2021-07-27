import './styles/style.css';

const div = document.getElementById('root');

div.innerHTML = ` <div class="container">
<main>
 <div class="row">
   <header>
    <h1 class="font-bold main-title mt-5"> Leaderboard </h1>
   </header>
  </div>
 <div class="row mt-5">
   <div class="col-md-6">
     <div class="d-flex align-items-center justify-content-center">
       <h2 class="font-bold pe-4"> Recent Scores </h2>
       <button class="bordered-button text-center" type="button"> <i class="fas fa-sync-alt font-bold text-center"></i> </button>
     </div>
     <ul id="list" class="mt-4 list-unstyled mx-auto w-75 p-0">
       <li class="font-bold"> Name: 100 </li>
       <li class="font-bold"> Name: 20  </li>
       <li class="font-bold"> Name: 50  </li>
     </ul>
   </div>
   <div class="col-md-6">
     <h2 class="font-bold text-center mt-1"> Add your score </h2>
     <form role="form" id="form" class=" mx-auto w-50 mt-4">
       <div class="form-group">
         <input type="text" name="" class="form-control input-name mb-3 bg-white" placeholder="Your name">
       </div>
       <div class="form-group">
         <input type="text" name="" class="form-control input-score bg-white" placeholder="Your score">
       </div>
       <div class="d-flex align-items-center justify-content-end mt-3">
         <button class="bordered-button" type="submit">
           <i class="fas fa-paper-plane text-center font-bold"> </i>
         </button>
       </div>
     </form>
   </div>
  </div>
</main>
</div>`;