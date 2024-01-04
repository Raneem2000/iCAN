import React from "react";
import "../components/Css/last.css";

function Last() {
  window.addEventListener("scroll", () => {
    if (window.scrollY < 650) {
      document.querySelector(
        ".Home h1"
      ).style.marginTop = `${window.scrollY}px`;
    } else return;
  });
  return (
    <>
      <header>
        <nav>
          <h1><span>i</span>CAN</h1>
          <span>
            <a href="#" >
              Home
            </a>
            <a href="#">About</a>
            <a href="#">Project</a>
            <a href="#">Contact</a>
          </span>
        </nav>
      </header>
      <section class="Home">
        <h1>Welcome To Our Solution
             </h1>
             {/* <div className="ican">
          <img src="/ican.png" />
        </div>{" "} */}
        {/* <img src="./wp8148899(2).png" alt="" /> */}
      </section>
      {/* <section class="About">
        <h1>About</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ullam obcaecati asperiores sunt. Cupiditate quas ut, dolorem perferendis nulla dolore unde blanditiis dolor corporis accusantium tenetur optio eum ipsum quam laboriosam laudantium, odit vel tempora tempore? Alias aut vel consequuntur! Doloremque tempore sit ratione neque officiis facere eius odit commodi! Architecto, culpa illo laboriosam beatae, soluta in doloribus necessitatibus itaque commodi dignissimos laudantium ut sapiente autem eaque nam quaerat molestias pariatur veritatis obcaecati! Iusto accusamus fugit ut sequi eaque vitae veritatis nulla recusandae mollitia ab alias deserunt consequatur quo laboriosam commodi aspernatur porro, adipisci reprehenderit numquam consectetur placeat beatae cupiditate.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ullam obcaecati asperiores sunt. Cupiditate quas ut, dolorem perferendis nulla dolore unde blanditiis dolor corporis accusantium tenetur optio eum ipsum quam laboriosam laudantium, odit vel tempora tempore? Alias aut vel consequuntur! Doloremque tempore sit ratione neque officiis facere eius odit commodi! Architecto, culpa illo laboriosam beatae, soluta in doloribus necessitatibus itaque commodi dignissimos laudantium ut sapiente autem eaque nam quaerat molestias pariatur veritatis obcaecati! Iusto accusamus fugit ut sequi eaque vitae veritatis nulla recusandae mollitia ab alias deserunt consequatur quo laboriosam commodi aspernatur porro, adipisci reprehenderit numquam consectetur placeat beatae cupiditate.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ullam obcaecati asperiores sunt. Cupiditate quas ut, dolorem perferendis nulla dolore unde blanditiis dolor corporis accusantium tenetur optio eum ipsum quam laboriosam laudantium, odit vel tempora tempore? Alias aut vel consequuntur! Doloremque tempore sit ratione neque officiis facere eius odit commodi! Architecto, culpa illo laboriosam beatae, soluta in doloribus necessitatibus itaque commodi dignissimos laudantium ut sapiente autem eaque nam quaerat molestias pariatur veritatis obcaecati! Iusto accusamus fugit ut sequi eaque vitae veritatis nulla recusandae mollitia ab alias deserunt consequatur quo laboriosam commodi aspernatur porro, adipisci reprehenderit numquam consectetur placeat beatae cupiditate.</p>
    </section> */}
    </>
  );
}

export default Last;
