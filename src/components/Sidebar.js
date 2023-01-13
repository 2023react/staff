import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div id="main_sidebar"  >
<form id="jobs-filter"   >
 
 
 
    <div  >
        <div  >
            <h1>Search all staff.am jobs</h1>
          

            <div class="search-autocomplete-bar">
<input type="text" id="jobsfilter-key_word"  value   placeholder="All keywords" autocomplete="off"/>
           
            </div>

            <button type="submit" id="btn_search_keyword" >Search</button>        </div>
    </div>
 

        <div class="accordion-style radius_changes">
        <div class="top-banner">
            {/* <a href="https://staff.am/staffmedia/telegram/" target="_blank">
                <picture><source type="image/webp" class="img-responsive" srcset="https://681828296218-prod-staff.s3.eu-central-1.amazonaws.com/staff.am/upload/7/3/f/a/73fa3d65.png.webp" alt="Banner"><img class="img-responsive" src="https://681828296218-prod-staff.s3.eu-central-1.amazonaws.com/staff.am/upload/7/3/f/a/73fa3d65.png" alt="Banner"></picture>            </a>
         */}
                      </div>
                  </div>

<div class="accordion-style jobs-sidebar-filters clearfix radius_changes">
    <div class="col-lg-12">
     
        <a href="/en/jobs" class="green_color pull-right jobClearFilter">
            Clear filters        </a>
    </div>
 

    <div class="col-lg-12 sidebar-inner">
        <div class="candidate-levels-sidebar">
            <h2>Filter by specialist level</h2>

            <div class="form-group field-jobsfilter-job_candidate_level">

<input type="hidden" name="JobsFilter[job_candidate_level]" value=""><div id="jobsfilter-job_candidate_level"><label><input type="checkbox" name="JobsFilter[job_candidate_level][]" value="1"><en>Student</en><span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_candidate_level][]" value="2"><en>Junior</en><span> (7)</span></label><label><input type="checkbox" name="JobsFilter[job_candidate_level][]" value="3"><en>Mid level</en><span> (74)</span></label><label><input type="checkbox" name="JobsFilter[job_candidate_level][]" value="4"><en>Senior</en><span> (45)</span></label><label><input type="checkbox" name="JobsFilter[job_candidate_level][]" value="5"><en>C level</en><span> (1)</span></label><label><input type="checkbox" name="JobsFilter[job_candidate_level][]" value="6"> </label></div>

<div class="help-block"></div>
</div>        </div>

        <div class="categories-sidebar">
            <h2>Filter by job category</h2>

            <div class="form-group field-jobsfilter-category">

<input type="hidden" name="JobsFilter[category]" value=""><div id="jobsfilter-category"><label><input type="checkbox" name="JobsFilter[category][]" value="1"><en>Software development</en><span data-count="69"> (69)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="2"><en>Quality Assurance /Control</en><span data-count="14"> (14)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="3"><en>UI/UX/Graphic Design</en><span data-count="7"> (7)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="4"><en>Product/Project Management</en><span data-count="7"> (7)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="5"><en>Hardware design</en><span data-count="2"> (2)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="6"><en>Other IT</en><span data-count="13"> (13)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="7"><en>Sales/service management</en><span data-count="8"> (8)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="8"><en>Administrative/office-work</en><span data-count="2"> (2)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="9"><en>Tourism/Hospitality/HoReCa</en><span data-count="1"> (1)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="10"><en>Marketing/Advertising</en><span data-count="12"> (12)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="11"><en>Communications/Journalism/PR</en><span data-count="1"> (1)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="12"><en>Accounting/Bookkeeping/Cash register</en><span data-count="0"> (0)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="13"><en>Finance Management</en><span data-count="0"> (0)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="14"><en>Banking/credit</en><span data-count="1"> (1)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="15"><en>TV/Radio</en><span data-count="0"> (0)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="16"><en>Education/training</en><span data-count="4"> (4)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="17"><en>Legal</en><span data-count="2"> (2)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="18"><en>Audit/Compliance</en><span data-count="0"> (0)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="19"><en>Healthcare/Pharmaceutical</en><span data-count="2"> (2)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="20"><en>Construction</en><span data-count="0"> (0)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="21"><en>Human Resources</en><span data-count="0"> (0)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="22"><en>Sports/Beauty</en><span data-count="0"> (0)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="23"><en>Procurement/Logistics/Courier</en><span data-count="0"> (0)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="24"><en>Production</en><span data-count="0"> (0)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="25"><en>Business/Management</en><span data-count="1"> (1)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="26"><en>Art/Design/Architecture</en><span data-count="0"> (0)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="27"><en>General/professional/Other services</en><span data-count="2"> (2)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="28"><en>IT security/Networks</en><span data-count="2"> (2)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="29"><en>NGO/Nonprofit</en><span data-count="0"> (0)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="31"><en>Insurance</en><span data-count="0"> (0)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="33"><en>Entertainment</en><span data-count="0"> (0)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="34"><en>Data Science/Data Engineering</en><span data-count="1"> (1)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="35"><en>Foreign language</en><span data-count="0"> (0)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="37"><en>Hardware Design / Engineering</en><span data-count="0"> (0)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="38"><en>Data Research/Analysis</en><span data-count="0"> (0)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="40"><en>Mechanical/Engineering</en><span data-count="0"> (0)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="41"><en>System Admin/Engineer</en><span data-count="1"> (1)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="42"><en>Retail business</en><span data-count="0"> (0)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="43"><en>Network Administration</en><span data-count="0"> (0)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="44"><en>Consultancy</en><span data-count="0"> (0)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="45"><en>State/ Public/ Civil service</en><span data-count="0"> (0)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="46"><en>Science</en><span data-count="0"> (0)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="47"><en>Content writing</en><span data-count="1"> (1)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="48"><en>Security</en><span data-count="0"> (0)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="50"><en>DevOps/Infrastructure </en><span data-count="4"> (4)</span></label><label><input type="checkbox" name="JobsFilter[category][]" value="51"><en>IT Support/Technician</en><span data-count="0"> (0)</span></label></div>

<div class="help-block"></div>
</div>        </div>

        <div class="type-sidebar">
            <h2>Filter by job types</h2>

            <div class="form-group field-jobsfilter-job_type">

<input type="hidden" name="JobsFilter[job_type]" value=""><div id="jobsfilter-job_type"><label><input type="checkbox" name="JobsFilter[job_type][]" value="1">Full time<span> (149)</span></label><label><input type="checkbox" name="JobsFilter[job_type][]" value="2">Part time<span> (7)</span></label><label><input type="checkbox" name="JobsFilter[job_type][]" value="4">Training<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_type][]" value="5">Fixed term contract<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_type][]" value="6">Other<span> (1)</span></label><label><input type="checkbox" name="JobsFilter[job_type][]" value="7">Tender<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_type][]" value="3">Internship<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_type][]" value="9">Remote<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_type][]" value="10">Flexible schedule<span> (0)</span></label></div>

<div class="help-block"></div>
</div>        </div>

        <div class="type-sidebar">
            <h2>Filter by salary</h2>

            <div class="form-group field-jobsfilter-salary">

<input type="hidden" name="JobsFilter[salary]" value=""><div id="jobsfilter-salary"><label><input type="checkbox" name="JobsFilter[salary][]" value="1">Mentioned<span> (11)</span></label><label><input type="checkbox" name="JobsFilter[salary][]" value="0">Not Mentioned<span> (146)</span></label></div>

<div class="help-block"></div>
</div>        </div>

        <div class="regions-sidebar">
            <h2>Filter by job terms</h2>

            <div class="form-group field-jobsfilter-job_term">

<input type="hidden" name="JobsFilter[job_term]" value=""><div id="jobsfilter-job_term"><label><input type="checkbox" name="JobsFilter[job_term][]" value="7">Civil contract<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_term][]" value="1">Permanent<span> (147)</span></label><label><input type="checkbox" name="JobsFilter[job_term][]" value="2">Temporary<span> (2)</span></label><label><input type="checkbox" name="JobsFilter[job_term][]" value="3">Freelance<span> (1)</span></label><label><input type="checkbox" name="JobsFilter[job_term][]" value="5">Contract<span> (6)</span></label><label><input type="checkbox" name="JobsFilter[job_term][]" value="6">Internship<span> (1)</span></label><label><input type="checkbox" name="JobsFilter[job_term][]" value="4">Other<span> (0)</span></label></div>

<div class="help-block"></div>
</div>        </div>

        <div class="regions-sidebar">
            <h2>Filter by job cities</h2>

            <div class="form-group field-jobsfilter-job_city">

<input type="hidden" name="JobsFilter[job_city]" value=""><div id="jobsfilter-job_city"><label><input type="checkbox" name="JobsFilter[job_city][]" value="34">Yerevan<span> (141)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="22">Gyumri<span> (2)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="20">Vanadzor<span> (1)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="11">Abovyan<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="51680">Akhuryan<span> (1)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="16">Alaverdi<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="48327">Amasia<span> (1)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="48152">Aparan<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="3">Ararat<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="5">Armavir<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="48317">Armenia (All cities)<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="4">Artashat<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="21">Artik<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="12">Arzni<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="1">Ashtarak<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="51666">Baghramyan<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="33">Berd<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="13050">Berlin<span> (2)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="30">Dilijan<span> (3)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="29382">Emmen<span> (2)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="7">Gavar<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="25">Goris<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="31">Ijevan<span> (1)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="48166">Jermuk<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="26">Kajaran<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="27">Kapan<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="8">Martuni<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="48162">Masis<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="28">Meghri<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="32">Noyemberyan<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="48318">Remote<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="43149">San Francisco<span> (1)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="9">Sevan<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="29">Sisian<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="48307">Stepanakert<span> (1)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="18">Stepanavan<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="2">Talin<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="19">Tashir<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="48159">Tsaghkadzor<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="48167">Vedi<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="44282">Washington<span> (1)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="48156">Yeghegnadzor<span> (0)</span></label><label><input type="checkbox" name="JobsFilter[job_city][]" value="48157">Yeghvard<span> (0)</span></label></div>

<div class="help-block"></div>
</div>        </div>
    </div>

    <input type="hidden" name="JobsFilter[sort_by]" value="0">
</div>
</form>
        <div class="accordion-style sidebar-banner radius_changes">
        <div class="top-banner">
            <a href="https://staff.am/staffmedia/mobile/" target="_blank">
                <picture><source type="image/webp" class="img-responsive" srcset="https://681828296218-prod-staff.s3.eu-central-1.amazonaws.com/staff.am/upload/5/d/a/3/5da3da47.png.webp" alt="Banner"><img class="img-responsive" src="https://681828296218-prod-staff.s3.eu-central-1.amazonaws.com/staff.am/upload/5/d/a/3/5da3da47.png" alt="Banner"></picture>            </a>
        </div>
    </div>


</div>
    </div>
  )
}

export default Sidebar
