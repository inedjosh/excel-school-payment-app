import React, {useEffect, useState} from 'react'
import styles from './../styles/prospect.module.css'
import Router from 'next/router'

function Ega() {

    
 useEffect(() => {
     if(!sessionStorage.getItem('check')){
         setAccessCheck(false)
         Router.push('/prospect') 
     }else{  
        setAccessCheck(true)
     }
 }, [])

const [accessCheck, setAccessCheck] = useState('')

if(accessCheck === true){

  return (
    <div className={styles.prospect}>
        <h1>SCHOOL PROSPECTUS</h1>
        <div>
        <h3 className={styles.h3}>OUR CORE VALUES</h3>
        <ul>
            <li className={styles.li}>Godliness</li>
            <li className={styles.li}>Hardwork</li>
            <li className={styles.li}>Strong Character</li>
            <li className={styles.li}>Empathy</li>
            <li className={styles.li}>Building for posterity</li>
        </ul>
        </div>
        <div>
        <h3 className={styles.h3}>TABLE OF CONTENT</h3>
        <ul>
        <li className={styles.li}>Offer of Provisional Admission </li>
        <li className={styles.li}>Introduction</li>
        <li className={styles.li}>Who we are</li>
        <li className={styles.li}>Our Mission</li>
        <li className={styles.li}>Our Scope</li>
        <li className={styles.li}>Guideline Lines for Students </li>
        <li className={styles.li}>General rules and regulation</li>
        <li className={styles.li}>Students Personal Effect</li>
        <li className={styles.li}>Recommendation Book List</li>
        <li className={styles.li}>Resumption Date </li>
        <li className={styles.li}>Parent Teacher Interactive Forum (PTIF)</li>
        <li className={styles.li}>Fees Structure</li>
        </ul>
        </div>
        <div>
<h3 className={styles.h3}>Offer of Provisional Admission</h3>
<p>I am directed by the management to communicate the Provisional admission offered you in this noble institution of learning. This offer must not be taken for granted as the school reserves the right to withdraw the offer if the following conditions are not met:</p>
<p>1.	Payment of non refundable deposit of N50,000 be made  within 2 weeks of offer with the Candidate Name as a Depositor. Failure to meet the target may lead to forfeiture of the offer for others.</p>
<p>Note that the non refundable deposit is already part of the bulk payment. All payment must be made into our Unity Bank Account below </p>
<p>Unity Bank: 0021242135</p>
<p>2.	Presentation of Primary School Certificate or Testimonial and Birth Certificate on registration. </p>
<p>Accept our Congratulations </p>
<h3 className={styles.h3}>Orpin, J. T. </h3>
<p>(Principal)</p>
        </div>
<div>
<h3 className={styles.h3}>INTRODUCTION:</h3>
<p>Thank you for making Excelgrace Academy your choice. We want to let you know that you made a wise decision and you will never regret schooling in this citadel of Academic and moral excellence. All that is needed to make your stay worthwhile is available to you here. Take advantage of well trained, ready to help staff and facilities to make your dream a reality. Once again, you are welcome on board.</p>
<h3 className={styles.h3}>WHO WE ARE:</h3>
<p>Excelgrace Academy is a sole proprietorship, private owned secondary school. It was founded on September 5th 2011 with a mandate from God to raise young men and women of high moral standard, integrity and God fearing, who will dare to be different for God wherever they find themselves in life. To actualize these, crops of well trained, God fearing professionals have been assembled, waiting eagerly to help bring out the greatness in you.</p>
<h3 className={styles.h3}>OUR VISSION:</h3>
<p>To make every child an asset for God and the society through a broad
based Education.
</p>
<h3 className={styles.h3}>OUR MISSION:</h3>
<p>To produce a total man who is academically sound, spiritually balanced, and vocationally empowered for purposeful living. we pursue this goal using modern technological facilities and reputable man power who are committed to giving out from their rich academic experience and God’s word as a tool in transforming lives for greatness. we thus encourage teacher/Student relationship for quality life impartation per excellence.</p>
<h3 className={styles.h3}>OUR SCOPE:</h3>
<p>The school runs both the Junior and Senior Secondary school. At both schools, we follow the national curriculum as approved by the National Education research and development council (NERDC) qualifying students for SSCE Conducted by WAEC, NECO and NABTEB in science and mathematics, Business and Humanities. Our charges are generally affordable.</p>
<h3 className={styles.h3}>GUIDELINES FOR STUDENTS:</h3>
<p>All students must strictly comply with the following guidelines to make their stay in the school worthwhile experience.</p>
<ul>
<li className={styles.li}>1. 	Check in and out days and time must be strictly adheres to.</li>

<li className={styles.li}>3.	Visiting days and time is observed every first Saturday of the month between the hours of 10am and 5pm. visiting any other day will not be entertained.</li>
<li className={styles.li}>4.	No cooked food is allowed on visiting days.</li>
<li className={styles.li}>5.	All items outside the ones listed for students personal use shall be confiscated if found.</li>
<li className={styles.li}>6.	Borrowing of wear and any other items among students is not allowed.</li>
<li className={styles.li}>7.	All items prescribed by the school must be provided before a student can be checked in. failure to comply; such student shall be send back.</li>
<li className={styles.li}>8.	No student should head for school without paying the prescribed fees at the bank. Duplicate of teller as evidence of payment serves as pre¬requisite for check in.</li>
<li className={styles.li}>9.	All activities are to be carried out at their designated places and time. Failure to comply leads to abuse which is a punishable offence.</li>
<li className={styles.li}>10.	All uniform must be worn as recommended.</li>
<li className={styles.li}>11.	Total obedience to instruction should be the watchword of every student to make the environment friendly.</li>
<li className={styles.li}>12.	No student is allowed to cook any form of food or make a cold dish. All are to depend on the dinning meals and their beverages.</li>
<li className={styles.li}>13.	The moment students checked in, all forms of communication between them and their parents ceases until the visiting day. Anyone caught violating this order shall be severely dealt with.</li>
<li className={styles.li}>14.	No student is allowed to buy/send for any item outside the school except from school tuck-shop.</li>
<li className={styles.li}>15.	All students must strictly adhere to daily activities and participate actively as outlined on the daily schedule of event.</li>
<li className={styles.li}>16.	All students must resume on the stipulated date and time to enable them participate fully in the orientation program so that they get acquainted with the environment to know what to do, where to do and how to do it.</li>
<li className={styles.li}>17. Any Students willing to transfer from the school must do that at the end of the term. All belongings must move out of the School hostel immediately to avoid misplacement after many months or term. The School shall not be held responsible for missing items if the owner fails to evacuate them immediately.</li>

</ul>
</div>
<div>
<h3 className={styles.h3}>GENERAL RULES AND REGULATIONS:</h3>
<p>The following rules and regulations must be taken to heart by all students. Any of them that is violated, attracts severe punishment including expulsion in extreme cases. </p>
<table className={styles.table}>
<thead>
<tr className={styles.tr}>
<th className={styles.th}>OFFENCES</th>
<th className={styles.th}>PURNISHMENT</th>
</tr>
</thead>
<tbody>
<tr className={styles.tr}>
    <td className={styles.td}>1.	Late coming </td>
    <td className={styles.td}>Manual labour</td>
</tr>
<tr className={styles.tr}>
    <td className={styles.td}>2.	Improper wear</td>
    <td className={styles.td}>Seizure</td>

</tr>
<tr className={styles.tr}>
    <td className={styles.td}>3.	Fighting</td>
    <td className={styles.td}>Suspension or Withdrawal</td>
</tr>
<tr className={styles.tr}>
    <td className={styles.td}>4.	Stealing</td>
    <td className={styles.td}>  Pay back 4 times what was    stolen or withdrawal</td>
</tr>
<tr className={styles.tr}>
    <td className={styles.td}>5.	Verbal assault</td>
    <td className={styles.td}>Productive manual labour</td>

</tr>
<tr className={styles.tr}>
    <td className={styles.td}>    6.  Absenteesm</td>
    <td className={styles.td}>As per class teachers’ discretion</td>
</tr>
<tr className={styles.tr}>
    <td className={styles.td}>    7. Use of cell phone</td>
    <td className={styles.td}>Seizure and destroyed</td>
</tr>
<tr className={styles.tr}>
    <td className={styles.td}>    8. Non-compliance to          Prefect/Staffs instruction</td>
    <td className={styles.td}>As may be recommended by  disciplinary committee</td>
</tr>
<tr className={styles.tr}>
    <td className={styles.td}>9. Bulling junior</td>
    <td className={styles.td}>Suspension or Withdrawal</td>
</tr>
<tr className={styles.tr}>
    <td className={styles.td}>11. Sneaking from School</td>
    <td className={styles.td}>Deterrent purnishment</td>
</tr>
<tr className={styles.tr}>
    <td className={styles.td}>  12. Mutilation of walls, cealing and doors shutters.</td>
    <td className={styles.td}>4 to 20 litre bucket or more of paint to repaint the surface.</td>
</tr>
<tr className={styles.tr}>
    <td className={styles.td}> 13. Intentional damage to School property</td>
    <td className={styles.td}>Replace the items times two</td>
</tr>
<tr className={styles.tr}>
<td className={styles.td}> 14. Tempering with electrical installation</td>
<td className={styles.td}>Suspension and or replacement of damage cause</td>
</tr>
<tr className={styles.tr}>
    <td className={styles.td}>15. Cheating and abetting checking in an examination, any kind of cheating.</td>
    <td className={styles.td}>Expulsion</td>
</tr>
<tr className={styles.tr}>
    <td className={styles.td}>  16. Cover up of an offender/evil/wrong doing</td>
    <td className={styles.td}>Same purnishment as the person that commit the said offence.</td>
</tr>
<tr className={styles.tr}>
    <td className={styles.td}>17. Lying/use of vulgar language</td> 
    <td className={styles.td}>Manual labour/apology letter</td>
</tr>
<tr className={styles.tr}>
    <td className={styles.td}>18. Improper disposal of waste</td>
    <td className={styles.td}>Made to more clean up as the duty master deems it fit.</td>
</tr>
<tr className={styles.tr}>
    <td className={styles.td}>19. Unhealthy relationship among students of same sex</td>
    <td className={styles.td}> Expulsion</td>
</tr>
<tr className={styles.tr}>
    <td className={styles.td}>20. Unhealthy relationship among students of opposite sex</td>
    <td className={styles.td}>Expulsion</td>
</tr>
<tr className={styles.tr}>
    <td className={styles.td}>21. Delay in resumption</td>
    <td className={styles.td}> A roll tissue per day for junior, a bunch of broom per day for senior</td>
</tr>
<tr className={styles.tr}>
    <td className={styles.td}>22. Immoral communication in any form</td>
    <td className={styles.td}>Appropriate purnishment as may be determined by COC committee</td>
</tr>
<tr className={styles.tr}>
    <td className={styles.td}>23.Use of mother tongue</td>
    <td className={styles.td}>Manual labour</td>
</tr>
<tr className={styles.tr}>
    <td className={styles.td}>24. Failure to perform duty assigned</td>
    <td className={styles.td}>As per duty master or ay officer in charge discretion</td>
</tr>
<tr className={styles.tr}>
    <td className={styles.td}>  25. Jumping over the School fence</td>
    <td className={styles.td}>Two week suspension and two bags of cement or more.</td>
</tr>
</tbody>
</table>
</div>
<div>
    <h3 className={styles.h3}>STUDENTS’ PERSONAL EFFECTS</h3>
    <ul>
        <li className={styles.li}>1.	A Pillow</li>
        <li className={styles.li}>2.	2 bed sheets (1white, 1Green check)</li>
        <li className={styles.li}>3.	2 Pillow Cases (1white, 1Green Check)</li>
        <li className={styles.li}>4.	Treated Mosquito Net </li>
        <li className={styles.li}>5.	Six Pants </li>
        <li className={styles.li}>6.	A Pair of Bathroom Slippers</li>
        <li className={styles.li}>7.	A White Canvas (for Sport)</li>
        <li className={styles.li}>8.	Six Tablets of toilet soap </li>
        <li className={styles.li}>9.	A bar Soap </li>
        <li className={styles.li}>10.	A Bottle of Cream </li>
        <li className={styles.li}>11.	10 Litre Jar</li>
        <li className={styles.li}>12.	A Plate, cup, Fork and Spoon</li>
        <li className={styles.li}>13.	Beverages </li>
        <li className={styles.li}>14.	12 sachets of the smallest size of washing detergent</li>
        <li className={styles.li}>15.	Six roll of toilet tissue </li>
        <li className={styles.li}>16.	2packs of sanitary pads (Girls)</li>
        <li className={styles.li}>17.	4 Black long inner wears (Girls)</li>
        <li className={styles.li}>18.	A dry cell torch light </li>
        <li className={styles.li}>19.	A bucket (Metal)</li>
        <li className={styles.li}>20.	Tooth Paste, brush and hair comb</li>
        <li className={styles.li}>21.	Food flask </li>
        <li className={styles.li}>22.	Towel</li>
        <li className={styles.li}>23.	Blanket</li>
        <li className={styles.li}>24.	A charcoal Pressing Iron</li>
        <li className={styles.li}>25.	One easy wear </li>
        <li className={styles.li}>26.	4 inner vests (Boys) </li>
        <li className={styles.li}>27.  A Cupboard with 2 partitions within, with a lock. The external dimension are Height 3ft, Length 2ft and Width 1.8ft.</li>
    </ul>
    <h3 className={styles.h3}>NOTE:</h3>
    <p>A cupboard can be made available by the school on request at the cost of N15000 only. Such request should be made two weeks to resumption date. </p>
</div>
<div>
    <h3 className={styles.h3}>RECOMMENDED BOOK LIST FOR JSS 1 </h3>
    <table className={styles.table}>
    <tbody>
        <tr className={styles.tr}>
            <td className={styles.td}>English Language</td>
            <td className={styles.td}>New oxford secondary English course for junior Secondary Schools 1 (Upper Basic Education )</td>
            <td className={styles.td}>Ayo Banjo Adekunle Adeniran Ayo Akano Uzuma Onaga</td>
            <td className={styles.td}>Revised edition</td>
        </tr>
        <tr className={styles.tr}>
            <td className={styles.td}>Mathematics</td>
            <td className={styles.td}>New General Mathematice for Junior Secondary Schools 1</td>
            <td className={styles.td}>M.F. Macrac A.O. Kalejaiye 
Z. I Chima 
G.U. Gaba

</td>
<td className={styles.td}>2013 NERDE curriculum (Pesrson) </td>
        </tr>
        <tr className={styles.tr}>
            <td className={styles.td}>Computer studies</td>
            <td className={styles.td}>New computer studies</td>
            <td className={styles.td}>J.O.E Otuka 
A.F. Akande 
S.L. Iginla
</td>
<td className={styles.td}>Learn Africa</td>
        </tr>
        <tr className={styles.tr}>
            <td className={styles.td}>Basic Science and Physical and Health Education</td>
            <td className={styles.td}>Classic Basic Technology for Junior secondary Schools 1-3</td>
            <td className={styles.td}>Abdusaliam 
E.& others
</td>
<td className={styles.td}>NERMED Edition Available in school </td>
        </tr>
        <tr className={styles.tr}>
            <td className={styles.td}>National Value</td>
            <td className={styles.td}>Authentic National Value Education for Basic 7</td>
            <td className={styles.td}>Atser Simon 1</td>
            <td className={styles.td}>New era Publications Available in school</td>
        </tr>
        <tr className={styles.tr}>
            <td className={styles.td}>Business studies</td>
            <td className={styles.td}>WABP Junior Secondary Business studies 1</td>
            <td className={styles.td}>Egbe T Ehiametalor, Grace I
 Makeri-yaha-ya, 
Kate O. 
Osu-Nwuo, Titilayo G. Oladnjoye
</td>
<td className={styles.td}>New Edition (WABP)</td>
        </tr>
        <tr className={styles.tr}>
            <td className={styles.td}>C.R.K</td>
            <td className={styles.td}>Living as God’s Children Religion Education and Moral Instructions for Upper Schools in Nigeria JSS1</td>
            <td className={styles.td}>T.N.O.
Qurcopome L.E.T
Shyllo 
A.J.V. Obinna
</td>
<td className={styles.td}>UBE Grade
Class 8
</td>
        </tr>
        <tr className={styles.tr}>
            <td className={styles.td}>Pre-vocational Studies</td>
            <td className={styles.td}>Cosmopolitan pre-vocational Studies for Junior Secondary Schools 1-3</td>
            <td className={styles.td}>Adesida 
Francis A, Olasupo Comfort A, Aluko Olubunmi A, 
Abdullah Isa A
</td>
<td className={styles.td}>Cosmopolitan </td>
        </tr>
        <tr className={styles.tr}>
            <td className={styles.td}>French</td>
            <td className={styles.td}>Petit Petit for Junior Secondary Schools 1-3</td>
            <td className={styles.td}>Balogun A.
Muhammed S. 
</td>
<td className={styles.td}>Extensive Publication Ltd</td>
        </tr>
        <tr className={styles.tr}>
            <td className={styles.td}>Basic Technology and Computer Sciences</td>
            <td className={styles.td}>Excellence in Basic Science and Technology</td>
            <td className={styles.td}>M.O Olaitan, A.H Iyabo, 
S. Oltude
</td>
<td className={styles.td}>Cambridge University Press 
Available in school
</td>
        </tr>
<tr className={styles.tr}>
    <td className={styles.td}>Culture and Creative Art (CCA)</td>
    <td className={styles.td}>Cultural and Creative Art Basic JSS1-3</td>
    <td className={styles.td}>Peter Akpen-Ade</td>
    <td className={styles.td}>UBE Revised Edition</td>
</tr>
</tbody>
    </table>
    <h3 className={styles.h3}>Note:
English and Mathematics Texts Books are to be supplied by the School.
</h3>
</div>
<div>
<h3 className={styles.h3}>OTHER LEANING MATERIAL </h3>
<ul>
    <li className={styles.li}>1. 	A dozen of 20 leaves exercise book </li>
    <li className={styles.li}>2.	Mathematical set </li>
    <li className={styles.li}>3.	A good school bag</li>
    <li className={styles.li}>4.	Pen, Pencil and ruler </li>
    <li className={styles.li}>5.	Drawing board and T. square </li>
    <li className={styles.li}>6.	Poster Colour and brushes </li>
    <li className={styles.li}>7.	RSV Holy Bible </li>
    <li className={styles.li}>8.	Oxford Advance Leaner’s Dictionary New 8th Edition</li>
    <li className={styles.li}>9.	SS & S Hymn book </li>
    <li className={styles.li}>10.	Drawing Book</li>
</ul>
</div>
<div>
    <h3 className={styles.h3}>RESUMPTION DATE </h3>
    <p>Our resumption date must not be compromised. This will enable all students undergo orientation programme. All students must check in on Saturday and Sunday between the hour of 10:00am and 5:00pm without fail. Date of resumption shall be communicated as soon as the appropriate authority allowed us. </p>
</div>
<div>
    <h3 className={styles.h3}>PARENTS TEACHERS NTERACTIVE FORUM (PTIF)</h3>
    <p>Interactive session with parents shall take place within the First Term of Resumption. Date shall be communicated in due course.</p>
</div>
<div>
    <h3 className={styles.h3}>FEES STRUCTURE</h3>
    <p>All fresh students are to pay #170,000 in addition to the #50,000 deposit. Bringing the total to #220,000 only.</p>
   
</div>
<div>
    <p>The Following personal items shall be given to the students on resumption. </p>
    <ul>
        <li className={styles.li}>1.	2 Pairs of Class Uniforms</li>
        <li className={styles.li}>2.	2. Pairs of Compound wears </li>
        <li className={styles.li}>3.	A Pair of outing wear </li>
        <li className={styles.li}>4.	A pair of Sport wear </li>
        <li className={styles.li}>5.	A Cardigan </li>
        <li className={styles.li}>6.	A pair of Sandals </li>
        <li className={styles.li}>7.	A pair of stockings </li>
        <li className={styles.li}>8.	English and Maths Text books </li>
        <li className={styles.li}>9.	2 Pairs of beret (Girls)</li>
        <li className={styles.li}>10.	A dozen of 60 leaves exercise book</li>
        <li className={styles.li}>11.	Leather Covered Six Spring Foam </li>
    </ul>
</div>
<div>
    <h3 className={styles.h3}>SUBSEQUENT TERMS FEES </h3>
    <p>Subsequent fees shall remain Sixty Five Thousand Naira (N65,000) only per term. No other levy shall be charged in addition till further review. </p>
</div>
<div>
    <h3 className={styles.h3}>JESUS HAS MADE US TO MAKE YOU</h3>
</div>
<div>
    <h3 className={styles.h3}>Enquiries:</h3>
    <h3 className={styles.h3}>08096126062, 08075756648  </h3>
</div>
    </div>
  )
}

return(
    <div className={styles.center}>Loading....</div>
)
}

// Ega.getInitialProps = ({req}) => {
//   const cookies = parseCookies(req)

//   return{
//     data: cookies.prospectusCheck
//  }
// }

export default Ega