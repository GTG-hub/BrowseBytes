import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./summary.module.css";
import { FaSearch, FaFilter } from "react-icons/fa";
function Summary() {
  return (
    <div className={styles.myclass2}>
      <div className="mx-[10%]">
        <div className="  my-5">
          <div className="Heading text-3xl md:text-7xl text-center my-3 text-white">
            BrowseBytes
          </div>
          <div className="text-sm text-gray-400 mt-7 text-center ">
            Searching for articles on BrowseBytes
          </div>
        </div>
      </div>
      <div className="Search flex flex-row justify-center items-center w-[50%]">
        <input
          className="border w-[75%] h-[37px] rounded-l-lg px-2 border-gray-300 rounded-r-none shadow-md"
          placeholder="Search"
        />
        <div className="serchicon w-[20%] sm:w-[15%] md:w-[15%] h-[37px] flex flex-col justify-around bg-[#005b96] hover:shadow-lg rounded-r-lg">
          <div className="flex flex-row mx-auto text-xs sm:text-base border-gray-300 rounded-md shadow-md text-white px-2">
            <div className="my-auto mx-1">
              <FaSearch className="mx-auto" />
            </div>
            <div>
              <button type="submit">Go</button>
            </div>
          </div>
        </div>
      </div>
      <h1>SUMMARY</h1>
      <div className={styles.container2}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
          delectus vel quibusdam magni, corporis animi labore tenetur, inventore
          enim facilis eaque! Atque quibusdam est minima quod totam nobis.
          Debitis laudantium suscipit quos ad, labore voluptas, eius quia
          quibusdam repellat sapiente expedita repellendus dolore laboriosam,
          sequi perferendis. Soluta temporibus labore ad optio aliquid fugiat
          veritatis distinctio. Distinctio quidem dolores rerum, repellat, quasi
          molestiae nemo veniam totam a saepe ratione magni, animi iste earum
          possimus reprehenderit aperiam. Velit harum magnam debitis soluta
          beatae, distinctio, nulla asperiores consequuntur at laudantium
          repudiandae, facilis nobis unde rerum accusantium! Quam obcaecati
          mollitia odit quidem fugiat, error aut maiores non ex veritatis
          dolorem autem rerum numquam laborum, quibusdam voluptatibus pariatur
          voluptates accusantium voluptate cum laudantium aperiam perferendis
          quo? Quibusdam voluptatem eveniet veritatis sunt dolore quasi in
          commodi atque delectus, magnam ipsum veniam, consectetur illo animi
          nulla. Soluta dignissimos eligendi minus quo quia dolores pariatur,
          qui ducimus nulla quis in tenetur numquam tempora quae officia modi
          voluptatem incidunt, rem maiores temporibus molestiae fuga non error
          amet. Eos in labore eligendi quae quidem aspernatur quas vitae dolores
          rerum? Nobis delectus debitis quas sequi beatae officia tempore
          placeat doloremque voluptas blanditiis eum dolorem, consectetur fugit
          minus dolore magnam saepe maxime voluptatem ipsam quisquam. Explicabo
          commodi magni ad voluptatibus dolorem atque amet eum voluptatem!
          Recusandae enim deserunt totam modi natus vitae molestias vel ullam
          delectus quibusdam? Maiores repudiandae autem, voluptates possimus
          sequi, rem dicta quo blanditiis vero velit iure fuga harum amet quia
          adipisci asperiores! Et nostrum ad debitis cupiditate quaerat quas
          dolorem laborum maiores ducimus adipisci reprehenderit magnam repellat
          veritatis, vitae repellendus! Neque voluptates perferendis cupiditate
          illum itaque incidunt quia eaque corrupti, maiores nihil, at, beatae
          inventore. Laboriosam voluptate quisquam distinctio molestias, unde
          sequi velit atque. Dicta at eaque accusamus odio a omnis amet
          similique natus, ab perspiciatis dolorem quas deleniti quos tempora
          temporibus molestiae fugiat rerum. Maxime voluptates sunt voluptatum
          quo minima saepe ab autem laudantium placeat itaque qui, ad ipsum
          tenetur temporibus sequi. Quibusdam ab ad libero at, sint ut
          laudantium enim consectetur qui nulla modi molestias praesentium saepe
          aliquid illo et autem animi. At harum pariatur atque ipsa explicabo
          hic sed, dolores enim! Reprehenderit eligendi ea cumque, vitae natus
          officiis. Hic, ab molestias. Similique mollitia odit, a debitis porro
          assumenda accusamus consequatur explicabo officia ullam atque nihil
          unde consectetur vero! Impedit maiores corrupti asperiores excepturi,
          ullam vero ratione, necessitatibus ab placeat consequatur velit
          veritatis. Aperiam quis sit quia ad inventore earum, nemo, laboriosam
          cupiditate ab exercitationem ea voluptas. Accusantium quasi amet
          excepturi at laborum, voluptates eligendi voluptate error ipsum magnam
          eaque consequuntur.
        </p>
      </div>
    </div>
  );
}
export default Summary;
