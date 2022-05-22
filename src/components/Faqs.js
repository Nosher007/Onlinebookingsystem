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
                                            Are the charges same for each city?
                                        </a>
                                    </div>
                                    <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                        <div className="card-body">
                                            No, They can be vary depending upon distance and booking timings as well
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#collapse2" aria-expanded="false">
                                            How much weight can per person carry?
                                        </a>
                                    </div>
                                    <div id="collapse2" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            A total of 18 kg and maximum 2 bags per person
                                        </div>
                                    </div>
                                </div> 
                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#collapse3" aria-expanded="false">
                                            In case My bus miss will i get refund?
                                        </a>
                                    </div>
                                    <div id="collapse3" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            No you have to pay for the next ticket at full price
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