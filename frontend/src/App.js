import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState('selection'); // 'selection', 'customization', 'final'
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [teamSlogan, setTeamSlogan] = useState("");
  const [teamLogo, setTeamLogo] = useState(null);
  const [modalPlayer, setModalPlayer] = useState(null);

  const allPlayers = [
    {
      id: 1,
      name: "Virat Kohli",
      role: "Batsman",
      country: "India",
      jerseyNumber: 18,
      image: "/players/virat-kohli.jpg",
      stats: {
        matches: 295,
        runs: 12671,
        average: 52.79,
        strikeRate: 92.54,
        centuries: 43,
        wickets: 0,
        economy: "-",
        dismissals: 0,
        bestPerformance: "183 vs Pakistan"
      }
    },
    {
      id: 2,
      name: "Babar Azam",
      role: "Batsman",
      country: "Pakistan",
      jerseyNumber: 56,
      image: "/players/babar-azam.jpg",
      stats: {
        matches: 125,
        runs: 5729,
        average: 54.57,
        strikeRate: 89.34,
        centuries: 19,
        wickets: 0,
        economy: "-",
        dismissals: 0,
        bestPerformance: "158 vs England"
      }
    },
    {
      id: 3,
      name: "Steve Smith",
      role: "Batsman",
      country: "Australia",
      jerseyNumber: 49,
      image: "/players/steve-smith.jpg",
      stats: {
        matches: 184,
        runs: 8647,
        average: 60.19,
        strikeRate: 87.65,
        centuries: 31,
        wickets: 0,
        economy: "-",
        dismissals: 0,
        bestPerformance: "215* vs England"
      }
    },
    {
      id: 4,
      name: "Ben Stokes",
      role: "All-rounder",
      country: "England",
      jerseyNumber: 55,
      image: "/players/ben-stokes.jpg",
      stats: {
        matches: 104,
        runs: 5061,
        average: 35.89,
        strikeRate: 92.18,
        centuries: 0,
        wickets: 199,
        economy: "-",
        dismissals: 0,
        bestPerformance: "258 vs South Africa"
      }
    },
    {
      id: 5,
      name: "MS Dhoni",
      role: "Wicket-keeper",
      country: "India",
      jerseyNumber: 7,
      image: "/players/ms-dhoni.jpg",
      stats: {
        matches: 350,
        runs: 10773,
        average: 50.57,
        strikeRate: 87.56,
        centuries: 0,
        wickets: 0,
        economy: "-",
        dismissals: 444,
        bestPerformance: "183* vs Sri Lanka"
      }
    },
    {
      id: 6,
      name: "Kane Williamson",
      role: "Batsman",
      country: "New Zealand",
      jerseyNumber: 22,
      image: "/players/kane-williamson.jpg",
      stats: {
        matches: 169,
        runs: 7115,
        average: 47.83,
        strikeRate: 84.48,
        centuries: 24,
        wickets: 0,
        economy: "-",
        dismissals: 0,
        bestPerformance: "251 vs West Indies"
      }
    },
    {
      id: 7,
      name: "Jos Buttler",
      role: "Wicket-keeper",
      country: "England",
      jerseyNumber: 63,
      image: "/players/jos-buttler.jpg",
      stats: {
        matches: 115,
        runs: 4120,
        average: 41.61,
        strikeRate: 118.55,
        centuries: 0,
        wickets: 0,
        economy: "-",
        dismissals: 181,
        bestPerformance: "162* vs Pakistan"
      }
    },
    {
      id: 8,
      name: "David Warner",
      role: "Batsman",
      country: "Australia",
      jerseyNumber: 31,
      image: "/players/david-warner.jpg",
      stats: {
        matches: 112,
        runs: 5710,
        average: 44.92,
        strikeRate: 95.29,
        centuries: 18,
        wickets: 0,
        economy: "-",
        dismissals: 0,
        bestPerformance: "335* vs Pakistan"
      }
    },
    {
      id: 9,
      name: "Kagiso Rabada",
      role: "Fast Bowler",
      country: "South Africa",
      jerseyNumber: 25,
      image: "/players/kagiso-rabada.png",
      stats: {
        matches: 65,
        runs: 0,
        average: 22.48,
        strikeRate: 41.2,
        centuries: 0,
        wickets: 281,
        economy: 3.27,
        dismissals: 0,
        bestPerformance: "7/112 vs England"
      }
    },
    {
      id: 10,
      name: "Quinton de Kock",
      role: "Wicket-keeper",
      country: "South Africa",
      jerseyNumber: 21,
      image: "/players/quinton-de-kock.png",
      stats: {
        matches: 143,
        runs: 5424,
        average: 44.26,
        strikeRate: 88.83,
        centuries: 0,
        wickets: 0,
        economy: "-",
        dismissals: 238,
        bestPerformance: "178 vs Bangladesh"
      }
    },
    {
      id: 11,
      name: "Shakib Al Hasan",
      role: "All-rounder",
      country: "Bangladesh",
      jerseyNumber: 75,
      image: "/players/shakib-al-hasan.png",
      stats: {
        matches: 237,
        runs: 6323,
        average: 38.29,
        strikeRate: 82.47,
        centuries: 0,
        wickets: 310,
        economy: "-",
        dismissals: 0,
        bestPerformance: "217 vs New Zealand"
      }
    },
    {
      id: 12,
      name: "Jasprit Bumrah",
      role: "Fast Bowler",
      country: "India",
      jerseyNumber: 93,
      image: "/players/jasprit-bumrah.jpg",
      stats: {
        matches: 36,
        runs: 0,
        average: 20.06,
        strikeRate: 44.8,
        centuries: 0,
        wickets: 159,
        economy: 2.68,
        dismissals: 0,
        bestPerformance: "6/33 vs West Indies"
      }
    },
    {
      id: 13,
      name: "Pat Cummins",
      role: "Fast Bowler",
      country: "Australia",
      jerseyNumber: 30,
      image: "/players/pat-cummins.jpg",
      stats: {
        matches: 57,
        runs: 0,
        average: 21.59,
        strikeRate: 44.6,
        centuries: 0,
        wickets: 269,
        economy: 2.90,
        dismissals: 0,
        bestPerformance: "6/23 vs Sri Lanka"
      }
    },
    {
      id: 14,
      name: "Rashid Khan",
      role: "Spin Bowler",
      country: "Afghanistan",
      jerseyNumber: 19,
      image: "/players/rashid-khan.jpg",
      stats: {
        matches: 89,
        runs: 0,
        average: 20.94,
        strikeRate: 32.1,
        centuries: 0,
        wickets: 162,
        economy: 3.91,
        dismissals: 0,
        bestPerformance: "7/18 vs West Indies"
      }
    },
    {
      id: 15,
      name: "Trent Boult",
      role: "Fast Bowler",
      country: "New Zealand",
      jerseyNumber: 18,
      image: "/players/trent-boult.jpg",
      stats: {
        matches: 117,
        runs: 0,
        average: 27.49,
        strikeRate: 34.0,
        centuries: 0,
        wickets: 317,
        economy: 4.85,
        dismissals: 0,
        bestPerformance: "7/34 vs West Indies"
      }
    },
    {
      id: 16,
      name: "Hardik Pandya",
      role: "All-rounder",
      country: "India",
      jerseyNumber: 33,
      image: "/players/hardik-pandya.jpg",
      stats: {
        matches: 74,
        runs: 1386,
        average: 33.02,
        strikeRate: 113.91,
        centuries: 0,
        wickets: 42,
        economy: "-",
        dismissals: 0,
        bestPerformance: "92* vs England"
      }
    },
    {
      id: 17,
      name: "KL Rahul",
      role: "Wicket-keeper",
      country: "India",
      jerseyNumber: 1,
      image: "/players/kl-rahul.jpg",
      stats: {
        matches: 48,
        runs: 2111,
        average: 45.89,
        strikeRate: 84.21,
        centuries: 0,
        wickets: 0,
        economy: "-",
        dismissals: 67,
        bestPerformance: "199 vs England"
      }
    },
    {
      id: 18,
      name: "Glenn Maxwell",
      role: "All-rounder",
      country: "Australia",
      jerseyNumber: 32,
      image: "/players/glenn-maxwell.jpg",
      stats: {
        matches: 130,
        runs: 2706,
        average: 33.05,
        strikeRate: 124.74,
        centuries: 0,
        wickets: 53,
        economy: "-",
        dismissals: 0,
        bestPerformance: "201* vs Afghanistan"
      }
    },
    {
      id: 19,
      name: "Rohit Sharma",
      role: "Batsman",
      country: "India",
      jerseyNumber: 45,
      image: "/players/rohit-sharma.jpg",
      stats: {
        matches: 265,
        runs: 10866,
        average: 46.23,
        strikeRate: 88.90,
        centuries: 31,
        wickets: 0,
        economy: "-",
        dismissals: 0,
        bestPerformance: "264 vs Sri Lanka"
      }
    },
    {
      id: 20,
      name: "Shaheen Afridi",
      role: "Fast Bowler",
      country: "Pakistan",
      jerseyNumber: 10,
      image: "/players/shaheen-afridi.jpg",
      stats: {
        matches: 46,
        runs: 0,
        average: 25.32,
        strikeRate: 33.4,
        centuries: 0,
        wickets: 112,
        economy: 4.55,
        dismissals: 0,
        bestPerformance: "6/35 vs Bangladesh"
      }
    },
    {
      id: 21,
      name: "Joe Root",
      role: "Batsman",
      country: "England",
      jerseyNumber: 66,
      image: "/players/joe-root.jpg",
      stats: {
        matches: 151,
        runs: 11672,
        average: 49.24,
        strikeRate: 86.93,
        centuries: 31,
        wickets: 0,
        economy: "-",
        dismissals: 0,
        bestPerformance: "254 vs Pakistan"
      }
    }
  ];

  const handlePlayerSelect = (player) => {
    if (selectedPlayers.find(p => p.id === player.id)) {
      setSelectedPlayers(selectedPlayers.filter(p => p.id !== player.id));
    } else if (selectedPlayers.length < 11) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setTeamLogo(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const openModal = (player) => {
    setModalPlayer(player);
  };

  const closeModal = () => {
    setModalPlayer(null);
  };

  const proceedToCustomization = () => {
    if (selectedPlayers.length === 11) {
      setCurrentStep('customization');
    }
  };

  const proceedToFinal = () => {
    if (teamName && teamSlogan) {
      setCurrentStep('final');
    }
  };

  // Player Selection Step
  if (currentStep === 'selection') {
    return (
      <>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 p-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-8 pt-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Build Your Dream Team
            </h1>
            <p className="text-xl text-blue-200 mb-6">Select 11 players from the world's finest cricketers</p>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 inline-block border border-white border-opacity-20">
              <span className="text-yellow-400 font-bold text-lg">
                Selected: {selectedPlayers.length}/11 Players
              </span>
              {selectedPlayers.length === 11 && (
                <button
                  onClick={proceedToCustomization}
                  className="ml-4 bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                >
                  Customize Team →
                </button>
              )}
            </div>
          </div>

          {/* Selected Players Preview */}
          {selectedPlayers.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Your Squad</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {selectedPlayers.map((player) => (
                  <div key={player.id} className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {player.name}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Players Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allPlayers.map((player) => {
              const isSelected = selectedPlayers.find(p => p.id === player.id);
              return (
                <div
                  key={player.id}
                  className={`group bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 cursor-pointer transition-all duration-300 ${
                    isSelected 
                      ? 'bg-yellow-400 bg-opacity-30 border-yellow-400 transform scale-105' 
                      : 'hover:bg-opacity-20 hover:scale-105'
                  }`}
                >
                  <div className="relative mb-4">
                    <img
                      src={player.image}
                      alt={player.name}
                      className="w-24 h-24 mx-auto rounded-full border-4 border-yellow-400 object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-blue-900 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {player.jerseyNumber}
                    </div>
                    {isSelected && (
                      <div className="absolute -top-2 -left-2 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
                        ✓
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-1 text-center">{player.name}</h3>
                  <p className="text-blue-200 text-center mb-1">{player.role}</p>
                  <p className="text-yellow-400 text-sm font-semibold text-center mb-4">{player.country}</p>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => handlePlayerSelect(player)}
                      className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
                        isSelected
                          ? 'bg-red-500 text-white hover:bg-red-600'
                          : selectedPlayers.length >= 11
                          ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                          : 'bg-yellow-400 text-blue-900 hover:bg-yellow-300'
                      }`}
                      disabled={!isSelected && selectedPlayers.length >= 11}
                    >
                      {isSelected ? 'Remove' : 'Select'}
                    </button>
                    <button
                      onClick={() => openModal(player)}
                      className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      📊
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {modalPlayer && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white border-opacity-20">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <img
                    src={modalPlayer.image}
                    alt={modalPlayer.name}
                    className="w-20 h-20 rounded-full border-4 border-yellow-400 mr-6 object-cover"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{modalPlayer.name}</h2>
                    <p className="text-yellow-400 font-semibold text-lg">{modalPlayer.role}</p>
                    <p className="text-blue-200">{modalPlayer.country}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-yellow-400 text-2xl font-bold transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-white bg-opacity-10 rounded-lg p-4 border border-white border-opacity-20">
                  <h4 className="text-yellow-300 font-semibold mb-2">Jersey Number</h4>
                  <p className="text-3xl font-bold text-white">{modalPlayer.jerseyNumber}</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4 border border-white border-opacity-20">
                  <h4 className="text-yellow-300 font-semibold mb-2">Matches Played</h4>
                  <p className="text-3xl font-bold text-white">{modalPlayer.stats.matches}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white bg-opacity-10 rounded-lg p-4 border border-white border-opacity-20">
                  <h4 className="text-yellow-300 font-semibold mb-3">Career Statistics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {modalPlayer.stats.runs && (
                      <>
                        <div>
                          <p className="text-blue-200 text-sm">Total Runs</p>
                          <p className="text-xl font-bold text-white">{modalPlayer.stats.runs}</p>
                        </div>
                        <div>
                          <p className="text-blue-200 text-sm">Average</p>
                          <p className="text-xl font-bold text-white">{modalPlayer.stats.average}</p>
                        </div>
                        <div>
                          <p className="text-blue-200 text-sm">Strike Rate</p>
                          <p className="text-xl font-bold text-white">{modalPlayer.stats.strikeRate}</p>
                        </div>
                        <div>
                          <p className="text-blue-200 text-sm">Centuries</p>
                          <p className="text-xl font-bold text-white">{modalPlayer.stats.centuries}</p>
                        </div>
                      </>
                    )}
                    {modalPlayer.stats.wickets && (
                      <>
                        <div>
                          <p className="text-blue-200 text-sm">Wickets</p>
                          <p className="text-xl font-bold text-white">{modalPlayer.stats.wickets}</p>
                        </div>
                        <div>
                          <p className="text-blue-200 text-sm">Economy Rate</p>
                          <p className="text-xl font-bold text-white">{modalPlayer.stats.economy}</p>
                        </div>
                      </>
                    )}
                    {modalPlayer.stats.dismissals && (
                      <div>
                        <p className="text-blue-200 text-sm">Dismissals</p>
                        <p className="text-xl font-bold text-white">{modalPlayer.stats.dismissals}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-4">
                  <h4 className="text-blue-900 font-bold mb-2">🏆 Best Performance</h4>
                  <p className="text-blue-900 font-semibold text-lg">{modalPlayer.stats.bestPerformance}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </>
    );
  }

  // Team Customization Step
  if (currentStep === 'customization') {
    return (
      <>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 pt-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Customize Your Team
            </h1>
            <p className="text-xl text-blue-200">Give your dream team an identity</p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <label className="block text-yellow-300 font-semibold mb-2">Team Name *</label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Enter your team name"
                />
              </div>
              
              <div>
                <label className="block text-yellow-300 font-semibold mb-2">Team Slogan *</label>
                <input
                  type="text"
                  value={teamSlogan}
                  onChange={(e) => setTeamSlogan(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Enter your team slogan"
                />
              </div>
              
              <div>
                <label className="block text-yellow-300 font-semibold mb-2">Team Logo</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-yellow-400 file:text-blue-900 file:font-semibold hover:file:bg-yellow-300"
                />
              </div>
            </div>

            {/* Preview */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Preview</h3>
              <div className="bg-white bg-opacity-5 rounded-lg p-6">
                {teamLogo && (
                  <img src={teamLogo} alt="Team Logo" className="w-20 h-20 mx-auto rounded-full border-4 border-yellow-400 mb-4" />
                )}
                <h2 className="text-3xl font-bold text-yellow-400 mb-2">{teamName || "Your Team Name"}</h2>
                <p className="text-blue-200 text-lg">{teamSlogan || "Your Team Slogan"}</p>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setCurrentStep('selection')}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-700 transition-colors"
              >
                ← Back to Selection
              </button>
              <button
                onClick={proceedToFinal}
                disabled={!teamName || !teamSlogan}
                className={`px-6 py-3 rounded-lg font-bold transition-colors ${
                  teamName && teamSlogan
                    ? 'bg-yellow-400 text-blue-900 hover:bg-yellow-300'
                    : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                }`}
              >
                Create Team →
              </button>
            </div>
          </div>
        </div>
      </div>
      {modalPlayer && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white border-opacity-20">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <img
                    src={modalPlayer.image}
                    alt={modalPlayer.name}
                    className="w-20 h-20 rounded-full border-4 border-yellow-400 mr-6 object-cover"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{modalPlayer.name}</h2>
                    <p className="text-yellow-400 font-semibold text-lg">{modalPlayer.role}</p>
                    <p className="text-blue-200">{modalPlayer.country}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-yellow-400 text-2xl font-bold transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-white bg-opacity-10 rounded-lg p-4 border border-white border-opacity-20">
                  <h4 className="text-yellow-300 font-semibold mb-2">Jersey Number</h4>
                  <p className="text-3xl font-bold text-white">{modalPlayer.jerseyNumber}</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4 border border-white border-opacity-20">
                  <h4 className="text-yellow-300 font-semibold mb-2">Matches Played</h4>
                  <p className="text-3xl font-bold text-white">{modalPlayer.stats.matches}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white bg-opacity-10 rounded-lg p-4 border border-white border-opacity-20">
                  <h4 className="text-yellow-300 font-semibold mb-3">Career Statistics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {modalPlayer.stats.runs && (
                      <>
                        <div>
                          <p className="text-blue-200 text-sm">Total Runs</p>
                          <p className="text-xl font-bold text-white">{modalPlayer.stats.runs}</p>
                        </div>
                        <div>
                          <p className="text-blue-200 text-sm">Average</p>
                          <p className="text-xl font-bold text-white">{modalPlayer.stats.average}</p>
                        </div>
                        <div>
                          <p className="text-blue-200 text-sm">Strike Rate</p>
                          <p className="text-xl font-bold text-white">{modalPlayer.stats.strikeRate}</p>
                        </div>
                        <div>
                          <p className="text-blue-200 text-sm">Centuries</p>
                          <p className="text-xl font-bold text-white">{modalPlayer.stats.centuries}</p>
                        </div>
                      </>
                    )}
                    {modalPlayer.stats.wickets && (
                      <>
                        <div>
                          <p className="text-blue-200 text-sm">Wickets</p>
                          <p className="text-xl font-bold text-white">{modalPlayer.stats.wickets}</p>
                        </div>
                        <div>
                          <p className="text-blue-200 text-sm">Economy Rate</p>
                          <p className="text-xl font-bold text-white">{modalPlayer.stats.economy}</p>
                        </div>
                      </>
                    )}
                    {modalPlayer.stats.dismissals && (
                      <div>
                        <p className="text-blue-200 text-sm">Dismissals</p>
                        <p className="text-xl font-bold text-white">{modalPlayer.stats.dismissals}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-4">
                  <h4 className="text-blue-900 font-bold mb-2">🏆 Best Performance</h4>
                  <p className="text-blue-900 font-semibold text-lg">{modalPlayer.stats.bestPerformance}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </>
    );
  }

  // Final Team Display
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1487466365202-1afdb86c764e)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white z-10 max-w-4xl mx-auto px-4">
          <div className="mb-8">
            {teamLogo ? (
              <img src={teamLogo} alt="Team Logo" className="w-32 h-32 mx-auto rounded-full border-4 border-yellow-400 shadow-2xl mb-6" />
            ) : (
              <div className="w-32 h-32 mx-auto rounded-full border-4 border-yellow-400 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-6 shadow-2xl">
                <span className="text-3xl font-bold text-white">🏏</span>
              </div>
            )}
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            {teamName}
          </h1>
          <p className="text-2xl md:text-3xl font-medium mb-8 text-yellow-200">
            {teamSlogan}
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setCurrentStep('selection')}
              className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white border-opacity-30 text-white hover:bg-opacity-30 transition-colors"
            >
              Edit Team
            </button>
          </div>
        </div>
      </div>

      {/* Team Squad */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">Your Champion Squad</h2>
          <p className="text-xl text-blue-200">{selectedPlayers.length} world-class cricketers united under one banner</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {selectedPlayers.map((player) => (
            <div
              key={player.id}
              onClick={() => openModal(player)}
              className="group bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative mb-6">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-24 h-24 mx-auto rounded-full border-4 border-yellow-400 group-hover:border-yellow-300 transition-colors object-cover"
                />
                <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-blue-900 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  {player.jerseyNumber}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                {player.name}
              </h3>
              <p className="text-blue-200 font-medium mb-2">{player.role}</p>
              <p className="text-yellow-400 text-sm font-semibold">{player.country}</p>
              
              <div className="mt-4 pt-4 border-t border-white border-opacity-20">
                <div className="flex justify-between text-sm">
                  <span className="text-blue-200">Matches</span>
                  <span className="text-white font-semibold">{player.stats.matches}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalPlayer && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white border-opacity-20">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <img
                    src={modalPlayer.image}
                    alt={modalPlayer.name}
                    className="w-20 h-20 rounded-full border-4 border-yellow-400 mr-6 object-cover"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{modalPlayer.name}</h2>
                    <p className="text-yellow-400 font-semibold text-lg">{modalPlayer.role}</p>
                    <p className="text-blue-200">{modalPlayer.country}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-yellow-400 text-2xl font-bold transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-white bg-opacity-10 rounded-lg p-4 border border-white border-opacity-20">
                  <h4 className="text-yellow-300 font-semibold mb-2">Jersey Number</h4>
                  <p className="text-3xl font-bold text-white">{modalPlayer.jerseyNumber}</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4 border border-white border-opacity-20">
                  <h4 className="text-yellow-300 font-semibold mb-2">Matches Played</h4>
                  <p className="text-3xl font-bold text-white">{modalPlayer.stats.matches}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white bg-opacity-10 rounded-lg p-4 border border-white border-opacity-20">
                  <h4 className="text-yellow-300 font-semibold mb-3">Career Statistics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {modalPlayer.stats.runs && (
                      <>
                        <div>
                          <p className="text-blue-200 text-sm">Total Runs</p>
                          <p className="text-xl font-bold text-white">{modalPlayer.stats.runs}</p>
                        </div>
                        <div>
                          <p className="text-blue-200 text-sm">Average</p>
                          <p className="text-xl font-bold text-white">{modalPlayer.stats.average}</p>
                        </div>
                        <div>
                          <p className="text-blue-200 text-sm">Strike Rate</p>
                          <p className="text-xl font-bold text-white">{modalPlayer.stats.strikeRate}</p>
                        </div>
                        <div>
                          <p className="text-blue-200 text-sm">Centuries</p>
                          <p className="text-xl font-bold text-white">{modalPlayer.stats.centuries}</p>
                        </div>
                      </>
                    )}
                    {modalPlayer.stats.wickets && (
                      <>
                        <div>
                          <p className="text-blue-200 text-sm">Wickets</p>
                          <p className="text-xl font-bold text-white">{modalPlayer.stats.wickets}</p>
                        </div>
                        <div>
                          <p className="text-blue-200 text-sm">Economy Rate</p>
                          <p className="text-xl font-bold text-white">{modalPlayer.stats.economy}</p>
                        </div>
                      </>
                    )}
                    {modalPlayer.stats.dismissals && (
                      <div>
                        <p className="text-blue-200 text-sm">Dismissals</p>
                        <p className="text-xl font-bold text-white">{modalPlayer.stats.dismissals}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-4">
                  <h4 className="text-blue-900 font-bold mb-2">🏆 Best Performance</h4>
                  <p className="text-blue-900 font-semibold text-lg">{modalPlayer.stats.bestPerformance}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
