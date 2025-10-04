import React from "react";
export default (props) => {
	return (
		<div className="items-start bg-white">
			<div className="flex flex-col items-start bg-white w-[1440px]">
				<div className="flex items-center self-stretch mt-4 mb-6 mx-6">
					<img
						src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a10eb7a-3191-4705-80dd-f63740e90559"} 
						className="w-[85px] h-[65px] mr-2 object-fill"
					/>
					<span className="flex-1 text-black text-2xl font-bold" >
						{"Airaware"}
					</span>
					<div className="flex justify-between items-start bg-black w-[743px] py-[19px] px-8 mr-[178px] rounded-[32px]">
						<div className="flex flex-col items-center w-[42px] ml-2.5">
							<span className="text-[#F9F9FB] text-base" >
								{"Home"}
							</span>
						</div>
						<div className="flex flex-col items-center w-[71px]">
							<span className="text-[#F9F9FB] text-base" >
								{"Air Check"}
							</span>
						</div>
						<div className="flex flex-col items-center w-[94px]">
							<span className="text-[#F9F9FB] text-base" >
								{"How It Works"}
							</span>
						</div>
						<div className="flex flex-col items-center w-[111px]">
							<span className="text-[#F9F9FB] text-base" >
								{"Health Insights"}
							</span>
						</div>
						<div className="flex flex-col items-center w-14">
							<span className="text-[#F9F9FB] text-base" >
								{"Articles"}
							</span>
						</div>
						<div className="flex flex-col items-center w-[67px] mr-[11px]">
							<span className="text-[#F9F9FB] text-base" >
								{"About Us"}
							</span>
						</div>
					</div>
					<button className="flex flex-col items-center bg-[#4A90E2] text-left w-[146px] py-[19px] rounded-[32px] border-0"
						onClick={()=>alert("Pressed!")}>
						<span className="text-[#F9F9FB] text-base" >
							{"Start Free Trail"}
						</span>
					</button>
				</div>
				<div className="flex flex-col items-start self-stretch bg-[url('https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/882d5bbf-53d9-4bc4-9a57-8138f11cd098')] bg-cover bg-center pt-[196px] pb-[35px] mb-[126px] mx-6 gap-11">
					<div className="flex flex-col items-start bg-[#00000000] py-14 mx-[164px] gap-[33px] rounded-2xl">
						<div className="flex flex-col items-start w-[1015px] mx-6">
							<span className="text-white text-5xl font-bold text-center w-[841px] ml-[93px]" >
								{"From EarthData to Action\n Helping You Breathe Better, Live Smarter"}
							</span>
						</div>
						<div className="flex flex-col items-center w-[1015px] mx-6">
							<span className="text-white text-base" >
								{"Empowering communities with space data to make smarter breathing choices."}
							</span>
						</div>
						<div className="flex flex-col items-center self-stretch">
							<button className="flex flex-col items-start bg-[#4A90E2] text-left py-[19px] rounded-[32px] border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-white text-base mx-4" >
									{"Watch Project Demo"}
								</span>
							</button>
						</div>
					</div>
					<div className="flex flex-col items-end self-stretch">
						<img
							src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66087d25-fbe9-4f1c-9ad1-e70e98591a9d"} 
							className="w-14 h-14 mr-[42px] object-fill"
						/>
					</div>
				</div>
				<div className="flex flex-col items-start self-stretch relative mb-[92px] mx-6">
					<div className="bg-[#FFFFFFD4] w-[680px] h-[921px]">
					</div>
					<img
						src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bff79825-67d9-4be3-b087-9cf621e83935"} 
						className="self-stretch h-[917px] absolute top-0.5 right-[1px] left-[1px] object-fill"
					/>
				</div>
				<div className="flex flex-col items-start mb-[135px] mx-20">
					<div className="flex flex-col items-start mb-[81px] gap-[25px]">
						<div className="flex flex-col items-start">
							<span className="text-black text-[44px] font-bold text-center w-[1171px] mx-[55px]" >
								{"How AirAware Transforms Satellite Data into Actionable Health Insights"}
							</span>
						</div>
						<div className="flex flex-col items-center w-[1279px]">
							<span className="text-black text-base" >
								{"From selecting your location to receiving personalized recommendations, here’s how AirAware helps you breathe better."}
							</span>
						</div>
					</div>
					<div className="flex items-center gap-5">
						<div className="flex flex-col items-start bg-[#EDF4FC] w-[401px] py-4 rounded-3xl">
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31c0f74c-538f-4d5c-a828-d7f648f213f2"} 
								className="w-[369px] h-[282px] mb-4 mx-4 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start mb-[9px] ml-4">
								<span className="text-[#E34BB8] text-sm" >
									{"Step 1"}
								</span>
							</div>
							<div className="flex items-center self-stretch mb-2 mx-4">
								<span className="flex-1 text-neutral-900 text-2xl font-bold" >
									{"Choose Your Location"}
								</span>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50bd80ab-f8c3-4bc8-a01a-ed1fb7a0d166"} 
									className="w-11 h-11 object-fill"
								/>
							</div>
							<div className="flex flex-col items-center self-stretch mx-4">
								<span className="text-[#4E4F54] text-base w-[364px]" >
									{"Use your current GPS location or manually select any point on the interactive map. AirAware will capture the exact coordinates to begin the analysis."}
								</span>
							</div>
						</div>
						<div className="flex flex-col items-start bg-[#EDF4FC] w-[437px] pt-4 pb-[49px] rounded-3xl" 
							style={{
								boxShadow: "0px 0px 40px #0F1D2D66"
							}}>
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0800f383-ec05-4b07-ab78-4c267c1fd055"} 
								className="w-[405px] h-[282px] mb-4 mx-4 rounded-lg object-fill"
							/>
							<div className="flex flex-col items-start mb-[9px] ml-4">
								<span className="text-[#E3AC4B] text-sm" >
									{"Step 2"}
								</span>
							</div>
							<div className="flex items-center self-stretch mb-2 mx-4">
								<span className="flex-1 text-neutral-900 text-2xl font-bold" >
									{"Analyze Air Quality"}
								</span>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e11171a1-03a0-4334-9caf-cd66ebefb58e"} 
									className="w-11 h-11 object-fill"
								/>
							</div>
							<div className="flex flex-col items-start ml-4">
								<span className="text-[#4E4F54] text-base w-[382px]" >
									{"Our system fetches real-time satellite data (like NASA’s TEMPO) to assess the concentration of key pollutants such as NO₂, O₃, and CO in the selected area."}
								</span>
							</div>
						</div>
						<div className="flex flex-col items-start bg-[#EDF4FC] w-[401px] py-4 rounded-3xl">
							<img
								src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8262aad-a971-4dab-a548-fcd6db76fbbb"} 
								className="w-[379px] h-[282px] mb-4 ml-4 rounded-3xl object-fill"
							/>
							<div className="flex flex-col items-start mb-[9px] ml-4">
								<span className="text-[#62E34B] text-sm" >
									{"Step 3"}
								</span>
							</div>
							<div className="flex items-center self-stretch mb-[9px] mx-4">
								<span className="flex-1 text-neutral-900 text-2xl font-bold mr-[98px]" >
									{"Personalized Health Insights"}
								</span>
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78e5de54-363b-499c-a6fc-68952d0c0ada"} 
									className="w-11 h-11 object-fill"
								/>
							</div>
							<div className="flex flex-col items-center self-stretch mx-4">
								<span className="text-[#4E4F54] text-base w-[358px]" >
									{"Based on the air quality data, AirAware provides clear, actionable health recommendations — helping you decide whether the air is safe for outdoor activities or if precautions are needed."}
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-start mb-[100px] mx-[74px]">
					<div className="flex flex-col items-start mb-20 gap-[25px]">
						<div className="flex flex-col items-center w-[1292px]">
							<span className="text-black text-[44px] font-bold" >
								{"What Does This Air Mean for Your Health?"}
							</span>
						</div>
						<div className="flex flex-col items-center w-[1292px]">
							<span className="text-black text-base" >
								{"AirAware translates satellite data into personalized health insights, helping you understand how air quality affects your well-being."}
							</span>
						</div>
					</div>
					<div className="flex flex-col items-start gap-14">
						<div className="flex items-center">
							<div className="flex flex-col items-center w-[586px] ml-4 mr-[72px] gap-8">
								<div className="flex flex-col items-start self-stretch gap-[25px]">
									<div className="flex flex-col self-stretch">
										<span className="text-black text-4xl font-bold text-center" >
											{"Your Air, Your Data: Real-Time Pollution Levels Around You"}
										</span>
									</div>
									<div className="flex flex-col items-start">
										<span className="text-[#4E4F54] text-base w-[565px]" >
											{"This chart shows the current concentration of key air pollutants in your area, based on satellite data. By visualizing these values, AirAware helps you understand the invisible elements in the air you breathe."}
										</span>
									</div>
								</div>
								<button className="flex flex-col items-start bg-[#4A90E2] text-left py-6 rounded-[32px] border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-[#F9F9FB] text-base mx-[58px]" >
										{"Get Personalized Advice"}
									</span>
								</button>
							</div>
							<div className="flex flex-col bg-[#EDF4FC] w-[618px] pb-4 gap-10 rounded-2xl">
								<div className="flex flex-col items-center self-stretch pt-2 pb-[102px] px-[183px]">
									<div className="flex flex-col items-start mb-[129px]">
										<span className="text-black text-2xl" >
											{"Air Content"}
										</span>
									</div>
									<div className="flex flex-col items-start gap-[3px]">
										<div className="flex flex-col items-center w-[252px]">
											<span className="text-black text-[32px] font-bold" >
												{"84%"}
											</span>
										</div>
										<div className="flex flex-col items-center w-[252px]">
											<span className="text-black text-base" >
												{"Safe"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col self-stretch gap-4">
									<div className="flex items-center self-stretch mx-2">
										<div className="flex items-center w-[129px] mr-[87px] gap-2">
											<div className="bg-[#3B00ED] w-[9px] h-[9px] rounded-[100px]">
											</div>
											<span className="text-black text-sm" >
												{"Nitrogen Dioxide"}
											</span>
										</div>
										<div className="bg-[#9C27B0] w-[9px] h-[9px] mr-[26px] rounded-[100px]">
										</div>
										<span className="text-black text-sm mr-[62px]" >
											{"Particulate Matter"}
										</span>
										<div className="bg-[#D81B60] w-[9px] h-[9px] mr-[26px] rounded-[100px]">
										</div>
										<span className="text-black text-sm mr-[17px]" >
											{"Carbon Monoxide"}
										</span>
									</div>
									<div className="flex justify-between items-start self-stretch mx-2">
										<div className="flex items-center w-[153px] gap-2">
											<div className="bg-[#FF9800] w-[9px] h-[9px] rounded-[100px]">
											</div>
											<span className="text-black text-sm" >
												{"Ground-level Ozone"}
											</span>
										</div>
										<div className="flex items-center w-[63px] mr-[222px] gap-2">
											<div className="bg-[#C0CA33] w-[9px] h-[9px] rounded-[100px]">
											</div>
											<span className="text-black text-sm" >
												{"Others"}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex items-center">
							<div className="flex flex-col bg-[#EDF4FC] w-[607px] pb-4 mr-[94px] gap-10 rounded-2xl">
								<div className="flex flex-col items-center self-stretch py-4 px-6 gap-[37px]">
									<div className="flex flex-col items-start">
										<span className="text-black text-2xl" >
											{"Air Pollution Trends (2015-2025)"}
										</span>
									</div>
									<div className="flex items-start self-stretch gap-[9px]">
										<div className="flex flex-col items-start w-[534px] mt-[7px]">
											<div className="self-stretch">
												<div className="self-stretch bg-[#0000001C] h-[1px] mb-[35px]">
												</div>
												<div className="self-stretch bg-[#0000001C] h-[1px] mb-[5px]">
												</div>
												<div className="flex flex-col items-start self-stretch pb-5 mb-3.5">
													<img
														src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2ab99e3-5e4c-4793-a9f8-d66c4cb2b77d"} 
														className="w-[475px] h-[87px] object-fill"
													/>
													<div className="self-stretch bg-[#0000001C] h-[1px] mb-[35px]">
													</div>
													<div className="self-stretch bg-[#0000001C] h-[1px]">
													</div>
												</div>
												<div className="self-stretch bg-[#0000003B] h-[1px]">
												</div>
											</div>
											<div className="flex items-start ml-[5px]">
												<div className="items-start bg-white w-[87px] mr-[9px]">
													<div className="bg-[#0000003B] w-[1px] h-[3px] ml-1">
													</div>
												</div>
												<div className="flex flex-col items-center bg-white w-[87px] mr-2">
													<div className="bg-[#0000003B] w-[1px] h-[3px]">
													</div>
												</div>
												<div className="flex flex-col items-center bg-white w-[87px] mr-2">
													<div className="bg-[#0000003B] w-[1px] h-[3px]">
													</div>
												</div>
												<div className="flex flex-col items-center bg-white w-[87px] mr-2">
													<div className="bg-[#0000003B] w-[1px] h-[3px]">
													</div>
												</div>
												<div className="flex flex-col items-center bg-white w-[87px]">
													<div className="bg-[#0000003B] w-[1px] h-[3px]">
													</div>
												</div>
											</div>
											<div className="flex items-start w-[442px] py-1 ml-[1px] mr-[90px]">
												<div className="flex flex-1 flex-col items-start ml-[30px] mr-3">
													<span className="text-black text-xs" >
														{"2016"}
													</span>
												</div>
												<div className="flex flex-col shrink-0 items-start mr-[67px]">
													<span className="text-black text-xs" >
														{"2018"}
													</span>
												</div>
												<div className="flex flex-col shrink-0 items-start mr-[67px]">
													<span className="text-black text-xs" >
														{"2020"}
													</span>
												</div>
												<div className="flex flex-col shrink-0 items-start mr-[66px]">
													<span className="text-black text-xs" >
														{"2022"}
													</span>
												</div>
												<span className="text-black text-xs" >
													{"2024"}
												</span>
											</div>
										</div>
										<div className="flex flex-col items-center w-[15px] gap-5">
											<span className="text-black text-xs" >
												{"40"}
											</span>
											<span className="text-black text-xs" >
												{"30"}
											</span>
											<span className="text-black text-xs" >
												{"20"}
											</span>
											<span className="text-black text-xs" >
												{"10"}
											</span>
											<span className="text-black text-xs" >
												{"0"}
											</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col self-stretch gap-4">
									<div className="flex items-start self-stretch mx-2">
										<div className="flex items-center w-[46px] mr-[166px] gap-2">
											<div className="bg-[#6200EE] w-[9px] h-[9px] rounded-[100px]">
											</div>
											<span className="text-black text-sm" >
												{"NO2"}
											</span>
										</div>
										<div className="flex items-center w-[58px] mr-[155px] gap-2">
											<div className="bg-[#9C27B0] w-[9px] h-[9px] rounded-[100px]">
											</div>
											<span className="text-black text-sm" >
												{"PM2.5"}
											</span>
										</div>
										<div className="flex items-center w-[38px] mr-32 gap-2">
											<div className="bg-[#D81B60] w-[9px] h-[9px] rounded-[100px]">
											</div>
											<span className="text-black text-sm" >
												{"CO"}
											</span>
										</div>
									</div>
									<div className="flex justify-between items-start self-stretch mx-2">
										<div className="flex items-center w-9 gap-2">
											<div className="bg-[#EE6002] w-[9px] h-[9px] rounded-[100px]">
											</div>
											<span className="text-black text-sm" >
												{"O3"}
											</span>
										</div>
										<div className="flex items-center w-11 mr-[235px] gap-2">
											<div className="bg-[#C0CA33] w-[9px] h-[9px] rounded-[100px]">
											</div>
											<span className="text-black text-sm" >
												{"SO₂"}
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-center w-[575px] mr-4 gap-8">
								<div className="flex flex-col self-stretch gap-[25px]">
									<div className="flex flex-col self-stretch">
										<span className="text-black text-4xl font-bold text-center" >
											{"How Air Pollution Has Shifted Over the Past Decade"}
										</span>
									</div>
									<div className="flex flex-col items-center self-stretch">
										<span className="text-[#4E4F54] text-base w-[571px]" >
											{"This section visualizes how key air pollutants have changed over the past ten years in a selected location. By analyzing long-term trends, we uncover patterns that help us understand environmental shifts and their impact on public health."}
										</span>
									</div>
								</div>
								<button className="flex flex-col items-center bg-[#4A90E2] text-left w-[300px] py-6 rounded-[32px] border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-[#F9F9FB] text-base" >
										{"Dive Deeper"}
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-start mb-[146px] mx-[81px]">
					<div className="flex flex-col items-start mb-20 gap-[25px]">
						<div className="flex flex-col items-center w-[1278px]">
							<span className="text-black text-[44px] font-bold" >
								{"NASA’s Latest on Air Quality and Earth Data"}
							</span>
						</div>
						<div className="flex flex-col items-start">
							<span className="text-black text-base text-center w-[1276px] mx-[1px]" >
								{"Dive into a selection of articles from NASA that explore air quality, satellite data, and environmental science. These reads offer deeper understanding of the challenges we face and the innovations driving change."}
							</span>
						</div>
					</div>
					<div className="flex flex-col items-start gap-6">
						<div className="flex items-center py-1 rounded-2xl border border-solid border-[#E1E2E3]">
							<div className="flex flex-col items-center w-[395px] ml-2 mr-8 rounded-lg">
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3413b522-2ad9-480c-9196-9b09b851a1be"} 
									className="w-[395px] h-[229px] rounded-lg object-fill"
								/>
							</div>
							<div className="flex flex-col items-start w-[844px] gap-6">
								<div className="flex flex-col items-start self-stretch gap-[17px]">
									<div className="flex flex-col items-start">
										<span className="text-black text-[32px] font-bold" >
											{"Predictive Models for Safer Skies"}
										</span>
									</div>
									<div className="flex flex-col items-start">
										<span className="text-[#4E4F54] text-base w-[819px]" >
											{"This article focuses on using machine learning to predict air quality using satellite and ground-based data. It outlines how predictive models can alert users before pollution spikes occur. The integration of weather data enhances accuracy and responsiveness. The article encourages teams to build tools that translate data into timely public health actions."}
										</span>
									</div>
								</div>
								<button className="flex flex-col items-center bg-[#4A90E2] text-left w-[300px] py-6 mr-[544px] rounded-[32px] border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-[#F9F9FB] text-base" >
										{"Open Article"}
									</span>
								</button>
							</div>
						</div>
						<div className="flex items-center py-1 rounded-2xl border border-solid border-[#E1E2E3]">
							<div className="flex flex-col items-center w-[395px] ml-2 mr-8 rounded-lg">
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e55c2d94-30d4-4ed0-bd09-d1fdd4c21287"} 
									className="w-[395px] h-[229px] rounded-lg object-fill"
								/>
							</div>
							<div className="flex flex-col items-start w-[844px] gap-6">
								<div className="flex flex-col items-start self-stretch gap-[17px]">
									<div className="flex flex-col items-start">
										<span className="text-black text-[32px] font-bold" >
											{"TEMPO and the Future of Air Quality Monitoring"}
										</span>
									</div>
									<div className="flex flex-col items-center self-stretch">
										<span className="text-[#4E4F54] text-base w-[839px]" >
											{"TEMPO (Tropospheric Emissions: Monitoring of Pollution) is a NASA mission designed to measure air pollutants across North America. The article explains how TEMPO’s hourly data helps track pollution patterns and supports health-related decisions. It showcases the potential of satellite-based monitoring in urban planning. The piece also discusses how developers can use TEMPO data in apps like AirAware."}
										</span>
									</div>
								</div>
								<button className="flex flex-col items-center bg-[#4A90E2] text-left w-[300px] py-6 mr-[544px] rounded-[32px] border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-[#F9F9FB] text-base" >
										{"Open Article"}
									</span>
								</button>
							</div>
						</div>
						<div className="flex items-center py-1 rounded-2xl border border-solid border-[#E1E2E3]">
							<div className="flex flex-col items-center w-[395px] ml-2 mr-8 rounded-lg">
								<img
									src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59a99099-07a2-44f4-b477-a7da84cd7b3d"} 
									className="w-[395px] h-[229px] rounded-lg object-fill"
								/>
							</div>
							<div className="flex flex-col items-start w-[844px] gap-6">
								<div className="flex flex-col items-start self-stretch gap-[17px]">
									<div className="flex flex-col items-start">
										<span className="text-black text-[32px] font-bold" >
											{"Cloud Computing for Cleaner Skies"}
										</span>
									</div>
									<div className="flex flex-col items-start">
										<span className="text-[#4E4F54] text-base w-[829px]" >
											{"This article explores how cloud computing can be used to process vast amounts of Earth observation data. By integrating satellite imagery with real-time air quality metrics, researchers can forecast pollution levels more accurately. The piece highlights scalable solutions for environmental monitoring. It also emphasizes the role of open data in empowering communities to act"}
										</span>
									</div>
								</div>
								<button className="flex flex-col items-center bg-[#4A90E2] text-left w-[300px] py-6 mr-[544px] rounded-[32px] border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-[#F9F9FB] text-base" >
										{"Open Article"}
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex items-start self-stretch bg-[#FFFFFFDB] pt-3 pb-[45px] mb-[106px] mx-20 gap-3">
					<div className="flex flex-1 flex-col items-start gap-1">
						<img
							src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6276a6c-8a74-4412-a29f-4111e5436fda"} 
							className="w-[103px] h-[79px] object-fill"
						/>
						<div className="flex flex-col self-stretch gap-8">
							<div className="flex flex-col items-start self-stretch gap-[9px]">
								<div className="flex flex-col items-start">
									<span className="text-black text-[44px] font-bold" >
										{"About AirAware"}
									</span>
								</div>
								<div className="flex flex-col items-start">
									<span className="text-black text-base" >
										{"Empowering Communities with Space-Powered Air Insight"}
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch gap-[17px]">
								<div className="flex flex-col items-start">
									<span className="text-[#4E4F54] text-base w-[705px]" >
										{"AirAware is a collaborative project developed as part of the NASA Space Apps Challenge. Our mission is to make air quality data accessible, understandable, and actionable for everyone."}
									</span>
								</div>
								<div className="flex flex-col items-start">
									<span className="text-[#4E4F54] text-base w-[717px]" >
										{"By leveraging satellite data like TEMPO and integrating it with user-friendly technology, we help individuals assess the air they breathe and make informed health decisions."}
									</span>
								</div>
								<div className="flex flex-col items-start">
									<span className="text-[#4E4F54] text-base w-[675px]" >
										{"Our team brings together expertise in UI/UX, AI, data science, and environmental research \n— united by a shared goal: to turn Earth data into everyday action."}
									</span>
								</div>
							</div>
						</div>
					</div>
					<img
						src={"https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0facfc63-39cd-4832-8e6e-953f75026700"} 
						className="w-[473px] h-[534px] object-fill"
					/>
				</div>
			</div>
		</div>
	)
}