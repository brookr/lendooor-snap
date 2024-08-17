"use client";

import { useEffect, useState } from "react";
import { useSDK } from "@metamask/sdk-react";

export default function Home() {
  const [nfts, setNfts] = useState<any[]>([]);
  const { account } = useSDK();

  useEffect(() => {
    const fetchNFTs = async () => {
      if (account) {
        // Infura NFT API is now deprecated, so we need to do something different... 
        const url = `https://nft.api.infura.io/networks/1/accounts/${account}/assets/nfts`;
        const options = {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_INFURA_API_KEY}`
          }
        }; 

        try {
          const response = await fetch(url, options); // returns 404, oops.
          const data = await response.json();
          setNfts(data.assets || []);
        } catch (error) {
          console.error("Error fetching NFTs:", error);
          setNfts([{
            "id": "0",
            "name": "mfer #5570",
            "image": "/art/5570.png",
            "value": "100",
            "description": "Aquired 6 days ago",
          },
          {
            "id": "1",
            "name": "mfer #5571",
            "image": "/art/5571.png",
            "description": "Aquired 9 days ago",
          },
          {
            "id": "2",
            "name": "mfer #5572",
            "image": "/art/5572.png",
            "description": "Aquired 33 days ago",
          },
          {
            "id": "3",
            "name": "mfer #5573",
            "image": "/art/5573.png",
            "description": "Aquired 42 days ago",
          },
          {
            "id": "4",
            "name": "mfer #5574",
            "image": "/art/5574.png",
            "description": "Aquired 69 days ago",
          },
          {
            "id": "5",
            "name": "mfer #5575",
            "image": "/art/5575.png",
            "description": "Aquired 77 days ago",
          },          
        ]);
        }
      } else  {
        console.log("No account found");
      }
    };

    fetchNFTs();
  }, [account]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Liquidity when you need it
      </h1>
      <p className="text-xl text-center max-w-2xl mb-8">
        Welcome to Lendoor, the NFT loan management platform that ensures your
        assets are working for you.
      </p>
      {account ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your NFTs:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {nfts.map((nft, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <img src={nft.image} alt={nft.name} className="w-full h-48 object-cover mb-2" />
                <h3 className="font-bold">{nft.name}</h3>
                <small style={{fontStyle: 'italic'}}>{nft.description}</small>
                <p>Borrow up to: {Math.round(Math.random() * 100)/10}Ξ</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Please connect your wallet to view your NFT loan options.</p>
      )}
    </main>
  );
}
