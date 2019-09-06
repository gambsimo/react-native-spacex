export default [{
  "flight_number": 78,
  "mission_name": "CRS-17",
  "mission_id": [
    "EE86F74"
  ],
  "launch_year": "2019",
  "launch_date_unix": 1556952480,
  "launch_date_utc": "2019-05-04T06:48:00.000Z",
  "launch_date_local": "2019-05-04T02:48:00-04:00",
  "is_tentative": false,
  "tentative_max_precision": "hour",
  "tbd": false,
  "launch_window": 0,
  "rocket": {
    "rocket_id": "falcon9",
    "rocket_name": "Falcon 9",
    "rocket_type": "FT",
    "first_stage": {
      "cores": [
        {
          "core_serial": "B1056",
          "flight": 0,
          "block": 5,
          "gridfins": true,
          "legs": true,
          "reused": false,
          "land_success": true,
          "landing_intent": true,
          "landing_type": "ASDS",
          "landing_vehicle": "OCISLY"
        }
      ]
    },
    "second_stage": {
      "block": 5,
      "payloads": [
        {
          "payload_id": "CRS-17",
          "norad_id": [
            44222
          ],
          "cap_serial": "C113",
          "reused": true,
          "customers": [
            "NASA (CRS)"
          ],
          "nationality": "United States",
          "manufacturer": "SpaceX",
          "payload_type": "Dragon 1.1",
          "payload_mass_kg": 2482,
          "payload_mass_lbs": 5472,
          "orbit": "ISS",
          "orbit_params": {
            "reference_system": "geocentric",
            "regime": "low-earth",
            "longitude": null,
            "semi_major_axis_km": 6787.125,
            "eccentricity": 0.0000954,
            "periapsis_km": 408.342,
            "apoapsis_km": 409.637,
            "inclination_deg": 51.6413,
            "period_min": 92.744,
            "lifespan_years": null,
            "epoch": "2019-05-09T11:41:12.000Z",
            "mean_motion": 15.52651478,
            "raan": 193.5186,
            "arg_of_pericenter": 322.6178,
            "mean_anomaly": 168.2425
          },
          "mass_returned_kg": null,
          "mass_returned_lbs": null,
          "flight_time_sec": null,
          "cargo_manifest": "https://www.nasa.gov/sites/default/files/atoms/files/spacex_crs-17_mission_overview.pdf"
        }
      ]
    },
    "fairings": null
  },
  "ships": [
    "OCISLY",
    "Hollywood",
    "GOQUEST"
  ],
  "telemetry": {
    "flight_club": "https://www.flightclub.io/result/2d?code=CR17"
  },
  "launch_site": {
    "site_id": "ccafs_slc_40",
    "site_name": "CCAFS SLC 40",
    "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
  },
  "launch_success": true,
  "links": {
    "mission_patch": "https://images2.imgbox.com/12/47/6uim8L1a_o.png",
    "mission_patch_small": "https://images2.imgbox.com/fc/58/9UErD3ut_o.png",
    "reddit_campaign": "https://new.reddit.com/r/spacex/comments/bd2l28/crs17_launch_campaign_thread/",
    "reddit_launch": "https://www.reddit.com/r/spacex/comments/bjsn0v/rspacex_crs17_official_launch_discussion_updates",
    "reddit_recovery": "https://www.reddit.com/r/spacex/comments/bjy7p5/rspacex_crs17_recovery_discussion_updates_thread",
    "reddit_media": "https://www.reddit.com/r/spacex/comments/bkc4d5/rspacex_crs17_media_thread_videos_images_gifs",
    "presskit": "https://www.spacex.com/sites/spacex/files/crs-17_press_kit.pdf",
    "article_link": "https://spaceflightnow.com/2019/05/04/spacex-launches-space-station-resupply-mission-lands-rocket-on-drone-ship/",
    "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_CRS-17",
    "video_link": "https://youtu.be/AQFhX5TvP0M",
    "youtube_id": "AQFhX5TvP0M",
    "flickr_images": [
      "https://live.staticflickr.com/65535/46856594435_206c773b5a_o.jpg",
      "https://live.staticflickr.com/65535/47720639872_284e49381d_o.jpg",
      "https://live.staticflickr.com/65535/46856594755_88f1b22e50_o.jpg",
      "https://live.staticflickr.com/65535/47720639542_1b7c1a71b0_o.jpg",
      "https://live.staticflickr.com/65535/47720639732_e04b2a9ed7_o.jpg",
      "https://live.staticflickr.com/65535/32829382467_087d024428_o.jpg"
    ]
  },
  "details": "SpaceX's 17th Commercial Resupply Services mission for NASA out of a total of 20 contracted flights, this mission brings essential supplies to the International Space Station using SpaceX's reusable Dragon 1 spacecraft. The external payloads for this mission include Orbital Carbon Observatory 3 and Space Test Program-Houston 6. The Falcon 9 launches from SLC-40 at Cape Canaveral AFS. The booster was expected to land at LZ-1, however, due to the ongoing investigation and clean-up following the Crew Dragon testing incident, it is likely to land on OCISLY instead.\n    ",
  "upcoming": false,
  "static_fire_date_utc": "2019-04-27T07:23:00.000Z",
  "static_fire_date_unix": 1556349780,
  "timeline": {
    "webcast_liftoff": 900,
    "go_for_prop_loading": -2280,
    "rp1_loading": -2100,
    "stage1_lox_loading": -2100,
    "stage2_lox_loading": -960,
    "engine_chill": -420,
    "prelaunch_checks": -60,
    "propellant_pressurization": -60,
    "go_for_launch": -45,
    "ignition": -3,
    "liftoff": 0,
    "maxq": 72,
    "meco": 137,
    "stage_sep": 141,
    "second_stage_ignition": 148,
    "first_stage_boostback_burn": 154,
    "first_stage_entry_burn": 399,
    "first_stage_landing": 507,
    "seco-1": 519,
    "dragon_separation": 578,
    "dragon_solar_deploy": 728,
    "dragon_bay_door_deploy": 8340
  }
}]