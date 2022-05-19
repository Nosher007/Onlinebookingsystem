import React from 'react'

function Faqs() {
  return (
    <section>
        <div className="faqs-main">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="lc-hd text-center">
                            <h2>Commonly Asked Questions</h2>
                        </div>
                        <div className="faqs">
                            <div id="accordion">
                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#collapseOne" aria-expanded="true">
                                            What is the purpose of the clinical study?
                                        </a>
                                    </div>
                                    <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                        <div className="card-body">
                                            Breast-conserving surgery is a critical first step of treatment for many women with breast cancer. The goal is to remove all the cancer cells, leaving behind only healthy tissue. Unfortunately, approximately 1 in 4 women who undergo breast-conserving surgery require a second surgery to remove cancer cells that were left behind after the initial procedure. This study evaluates a novel drug (pegulicianine) and imaging system intended to help surgeons identify and remove cancer remaining in the surgical cavity after standard surgery, with the ultimate goal of helping reduce the risk of repeat surgeries.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#collapse2" aria-expanded="false">
                                            Will my surgery and treatment plan change if I participate in this study?
                                        </a>
                                    </div>
                                    <div id="collapse2" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            You will receive the same standard lumpectomy procedure as well as pre- and post-operative care whether or not you participate in the study. However, study participants will also be administered the pegulicianine
                                            drug 2 to 6 hours prior to surgery, and may have additional imaging and tissue removal. Please refer to the <a href="breast-cancer-map.php#timeline">study timeline</a> for more information on the standard procedure and additional elements associated with the INSITE study.
                                        </div>
                                    </div>
                                </div> 
                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#collapse3" aria-expanded="false">
                                            In the study timeline, what does “assigned at random” mean?
                                        </a>
                                    </div>
                                    <div id="collapse3" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            For this study, patients are randomly assigned to either an intervention arm (10 of every 11 patients) or a control arm (1 of every 11 patients). For patients in the intervention arm, the surgeon will use the Lumicell imaging system to scan the cavity after the standard procedure, and will remove additional highlighted tissue if found; for patients in the control arm, the surgery will end after the standard procedure is complete.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#collapse4" aria-expanded="false">
                                            Will I have more tissue removed if I participate in the study?
                                        </a>
                                    </div>
                                    <div id="collapse4" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            If the surgeon identifies highlighted cells — i.e., possible residual cancer — using the Lumicell imaging system, a small amount of additional tissue will be removed as part of the study.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#collapse5" aria-expanded="false">
                                            For how long will I be a participant in the study?
                                        </a>
                                    </div>
                                    <div id="collapse5" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            You will be in the study from time of enrollment (day of surgery) to your first follow-up visit (approximately 2 weeks), or if you choose to participate in an optional post-surgical survey, 3 to 6 months after your surgery. You will remain in the study until your physician indicates that there is no further surgery required.
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#collapse6" aria-expanded="false">
                                            Are there any common side effects after pegulicianine injection?
                                        </a>
                                    </div>
                                    <div id="collapse6" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            Patients who have been injected with pegulicianine may notice blue/green discoloration of urine for 1 to 2 days after injection. This is a known effect of the dye, and is known not to be harmful to you.
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#collapse7" aria-expanded="false">
                                            Is pegulicianine a radioactive contrast agent, as used in PET imaging?
                                        </a>
                                    </div>
                                    <div id="collapse7" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            No, pegulicianine contains no radioactive material.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Faqs